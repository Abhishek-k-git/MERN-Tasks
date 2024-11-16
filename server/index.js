const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./errors/errorHandler");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(
   cors({
      origin: ["https://tasks-mern-app.netlify.app"],
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
   })
);
app.use(express.json());
app.use("/api", taskRoutes);
app.use(errorHandler); // Error handling middleware

// Start the server
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
