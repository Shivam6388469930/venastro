const mongoose = require("mongoose");

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

module.exports = mongoose.model("Email", emailSchema);
