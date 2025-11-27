import mongoose from 'mongoose';

const ApplySchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "JobPost",
      required: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    resume: {
      type: String, // store resume URL (Cloudinary, S3, etc.)
      required: true,
    },
    coverLetter: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Apply", ApplySchema);