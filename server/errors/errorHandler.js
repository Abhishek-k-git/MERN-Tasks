const AppError = require("./AppError");

const errorHandler = (err, req, res, next) => {
   // If the error is an instance of AppError, respond with its details
   if (err instanceof AppError) {
      return res.status(err.statusCode).json({
         status: "error",
         message: err.message,
      });
   }

   // For other errors, log the error and send a generic response
   console.error(err);
   res.status(500).json({
      status: "error",
      message: "Internal Server Error",
   });
};

module.exports = errorHandler;
