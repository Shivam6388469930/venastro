// Custom Error Class
export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Global Error Handler Middleware
const errorHandler = (err, req, res, next) => {
  // Set default status and message
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  let error = { ...err };
  error.message = err.message;

  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((el) => el.message);
    const message = `Invalid input data: ${errors.join(". ")}`;
    error = new AppError(message, 400);
  }

  // Handle Mongoose duplicate key errors (E11000)
  if (err.code === 11000) {
    const value = Object.values(err.keyValue)[0];
    const message = `Duplicate field value: ${value}. Please use another value.`;
    error = new AppError(message, 400);
  }

  // Specific error handling
  if (err.code === "EAUTH") {
    const message = "Email configuration error. Please contact support.";
    error = new AppError(message, 500);
  }

  // Handle Mongoose invalid ID errors
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid ${err.path}: ${err.value}`;
    error = new AppError(message, 404);
  }

  // Send the final error response
  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
    // Optionally include stack trace in development
    // stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};

export default errorHandler;
