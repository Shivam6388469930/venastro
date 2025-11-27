import mongoose from "mongoose";

const ApplySchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobPost",
      required: [true, "Job ID is required"],
      index: true,
    },
    fullName: {
      type: String,
      required: [true, "Full name is required"],
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
    resume: {
      type: String,
      required: [true, "Resume URL is required"],
    },
    coverLetter: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "reviewing", "shortlisted", "rejected", "accepted"],
      default: "pending",
    },
  },
  { timestamps: true }
);

ApplySchema.index({ jobId: 1, email: 1 }, { unique: true });

// Index for queries
ApplySchema.index({ status: 1, createdAt: -1 });

export default mongoose.model("Apply", ApplySchema);
