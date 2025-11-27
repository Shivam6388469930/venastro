import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,
    budget: String,
    service: String,
    timelines: String,
  },
  { timestamps: true }
);

export default mongoose.model("Email", emailSchema);