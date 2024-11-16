const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
   title: { type: String, required: true },
   description: { type: String, default: "" },
   setDate: { type: Date, required: true },
   startTime: { type: String, required: true },
   endTime: { type: String, required: true },
   priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
   },
   status: {
      type: String,
      enum: ["In Progress", "Completed"],
      default: "In Progress",
   },
   createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Task", taskSchema);
