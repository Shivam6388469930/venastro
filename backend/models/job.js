import mongoose from "mongoose";

const JobPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
      minlength: [3, "Title must be at least 3 characters long"],
    },
    companyName: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
      minlength: [2, "Company name must be at least 2 characters long"],
    },
    description: {
      type: String,
      required: [true, "Job description is required"],
      minlength: [20, "Description must be at least 20 characters long"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    responsibilities: {
      type: [String],
      required: [true, "Responsibilities are required"],
      validate: {
        validator: function (v) {
          return v && v.length > 0;
        },
        message: "At least one responsibility is required",
      },
    },
    requirements: {
      type: [String],
      required: [true, "Requirements are required"],
      validate: {
        validator: function (v) {
          return v && v.length > 0;
        },
        message: "At least one requirement is required",
      },
    },
    salary: {
      type: String,
      default: "Not disclosed",
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "closed", "draft"],
      default: "active",
    },
  },
  { timestamps: true }
);

JobPostSchema.index({ status: 1, createdAt: -1 });
JobPostSchema.index({ companyName: 1 });

export default mongoose.model("JobPost", JobPostSchema);
