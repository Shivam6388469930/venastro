import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import emailRoute from "./routes/emailRoute.js"; // Note the .js extension
import "dotenv/config"; // Loads environment variables directly

const PORT = process.env.PORT || 8080;
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

// Routes
app.use("/api/v1/email", emailRoute);

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
