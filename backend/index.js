import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
// Note the .js extension
import "dotenv/config"; // Loads environment variables directly
import jobRouter from "./route/jobRoutes.js";
import applyRouter from "./route/applyRoutes.js";

import "dotenv/config"; // Loads environment variables directly
import emailRoute from "./route/email.js";

const PORT = 8080;
const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
// app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send("Backend API is running! 🚀");
});

// Routes
app.use("/api/v1/email", emailRoute);
app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/apply", applyRouter);

app.use(errorHandler);

// 🔥 CONNECT TO DATABASE
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    // Start server AFTER database connection
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
