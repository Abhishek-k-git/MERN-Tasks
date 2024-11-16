const express = require("express");
const { body } = require("express-validator");
const TaskController = require("../controllers/taskController");

const router = express.Router();

const taskValidation = [
   body("title")
      .notEmpty()
      .withMessage("Title is required")
      .isString()
      .withMessage("Title must be a string")
      .isLength({ max: 100 })
      .withMessage("Title must not exceed 100 characters"),

   body("description")
      .optional()
      .isString()
      .withMessage("Description must be a string")
      .isLength({ max: 500 })
      .withMessage("Description must not exceed 500 characters"),

   body("setDate")
      .notEmpty()
      .withMessage("Date is required")
      .isISO8601()
      .withMessage("Invalid date format"),

   body("startTime")
      .notEmpty()
      .withMessage("Start time is required")
      .isString()
      .withMessage("Start time must be a string"),

   body("endTime")
      .notEmpty()
      .withMessage("End time is required")
      .isString()
      .withMessage("End time must be a string"),

   body("priority")
      .optional()
      .isIn(["Low", "Medium", "High"])
      .withMessage("Invalid priority value"),

   body("status")
      .optional()
      .isIn(["In Progress", "Completed"])
      .withMessage("Invalid status value"),
];

// Routes
router.post("/tasks", taskValidation, TaskController.createTask);
router.get("/tasks", TaskController.getTasks);
router.put("/tasks/:id", taskValidation, TaskController.updateTask);
router.delete("/tasks/:id", TaskController.deleteTask);
router.patch("/tasks/:id/status", TaskController.updateTaskStatus);
router.get("/tasks/search", TaskController.searchTasks);

module.exports = router;
