const Task = require("../models/taskModel");
const AppError = require("../errors/AppError");

class TaskService {
   static async createTask(data) {
      const task = new Task(data);
      return await task.save();
   }

   static async getAllTasks() {
      return await Task.find();
   }

   static async updateTask(id, data) {
      const task = await Task.findByIdAndUpdate(id, data, { new: true });
      if (!task) throw new AppError("Task not found", 404);
      return task;
   }

   static async deleteTask(id) {
      const task = await Task.findByIdAndDelete(id);
      if (!task) throw new AppError("Task not found", 404);
      return task;
   }

   static async updateTaskStatus(id, status) {
      const task = await Task.findByIdAndUpdate(id, { status }, { new: true });
      if (!task) throw new AppError("Task not found", 404);
      return task;
   }

   static async searchTasks(query) {
      return await Task.find({
         $or: [
            { title: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } },
         ],
      });
   }
}

module.exports = TaskService;
