import Apply from "../models/applyModel.js"; // Note the .js extension
import JobPost from "../models/jobPostModel.js"; // Note the .js extension

// ======================
// APPLY FOR JOB
// ======================

export const applyJob = async (req, res) => {
  try {
    const { jobId, fullName, email, phone, resume, coverLetter } = req.body;

    // Check job exists
    const job = await JobPost.findById(jobId);
    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    // Save application
    const application = await Apply.create({
      jobId,
      fullName,
      email,
      phone,
      resume,
      coverLetter,
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================
// GET ALL APPLICATIONS
// ======================

export const getAllApplications = async (req, res) => {
  try {
    const apps = await Apply.find().populate("jobId");

    res.status(200).json({
      success: true,
      count: apps.length,
      data: apps,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ======================
// GET APPLICATIONS BY JOB ID
// ======================

export const getApplicationsByJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    const apps = await Apply.find({ jobId }).populate("jobId");

    res.status(200).json({
      success: true,
      count: apps.length,
      data: apps,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
