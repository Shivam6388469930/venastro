import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please provide a valid email"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      minlength: [10, "Message must be at least 10 characters long"],
    },
    budget: {
      type: String,
      trim: true,
    },
    service: {
      type: String,
      trim: true,
    },
    timelines: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "read", "responded"],
      default: "pending",
    },
  },
  { timestamps: true }
);

emailSchema.index({ email: 1, createdAt: -1 });

export default mongoose.model("Email", emailSchema);
