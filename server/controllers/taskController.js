const TaskService = require("../services/taskService");
const { validationResult } = require("express-validator");
const AppError = require("../errors/AppError");

class TaskController {
   static async createTask(req, res, next) {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return next(
            new AppError(
               errors
                  .array()
                  .map((err) => err.msg)
                  .join(", "),
               400
            )
         );
      }
      try {
         const task = await TaskService.createTask(req.body);
         res.status(201).json(task);
      } catch (error) {
         next(new AppError("Error creating task", 400));
      }
   }

   static async getTasks(req, res, next) {
      try {
         const tasks = await TaskService.getAllTasks();
         res.json(tasks);
      } catch (error) {
         next(new AppError("Error fetching tasks", 500));
      }
   }

   static async updateTask(req, res, next) {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return next(
            new AppError(
               errors
                  .array()
                  .map((err) => err.msg)
                  .join(", "),
               400
            )
         );
      }
      try {
         const updatedTask = await TaskService.updateTask(
            req.params.id,
            req.body
         );
         res.json(updatedTask);
      } catch (error) {
         next(new AppError("Error updating task", 400));
      }
   }

   static async deleteTask(req, res, next) {
      try {
         await TaskService.deleteTask(req.params.id);
         res.status(204).json();
      } catch (error) {
         next(new AppError("Error deleting task", 500));
      }
   }

   static async updateTaskStatus(req, res, next) {
      const { status } = req.body;
      if (!["In Progress", "Completed"].includes(status)) {
         return next(new AppError("Invalid status value", 400));
      }
      try {
         const updatedTask = await TaskService.updateTaskStatus(
            req.params.id,
            status
         );
         res.json(updatedTask);
      } catch (error) {
         next(new AppError("Error updating task status", 400));
      }
   }

   static async searchTasks(req, res, next) {
      const query = req.query.query || "";
      try {
         const tasks = await TaskService.searchTasks(query);
         res.json(tasks);
      } catch (error) {
         next(new AppError("Error searching tasks", 500));
      }
   }
}

module.exports = TaskController;
