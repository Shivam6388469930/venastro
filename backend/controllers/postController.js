// controllers/jobPostController.js

const JobPost = require("../models/jobPostModel");

// CREATE JOB POST
exports.createJob = async (req, res) => {
  try {
    const newJob = new JobPost(req.body);
    const savedJob = await newJob.save();

    res.status(201).json({
      success: true,
      message: "Job post created successfully",
      data: savedJob,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL JOB POSTS
exports.getJobs = async (req, res) => {
  try {
    const jobs = await JobPost.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: jobs.length,
      data: jobs,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET SINGLE JOB POST
exports.getJobById = async (req, res) => {
  try {
    const job = await JobPost.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    res.status(200).json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
