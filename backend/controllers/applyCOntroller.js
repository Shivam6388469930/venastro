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

    if (job.status !== "active") {
      return res.status(400).json({
        success: false,
        message: "This job is no longer accepting applications",
      });
    }

    const existingApplication = await Apply.findOne({ jobId, email });
    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already applied for this job",
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

    await application.populate("jobId", "title companyName location");

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
    const { status, page = 1, limit = 10 } = req.query;

    // Build query
    const query = {};
    if (status) query.status = status;

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const [applications, total] = await Promise.all([
      Apply.find(query)
        .populate("jobId", "title companyName location status")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit))
        .lean(),
      Apply.countDocuments(query),
    ]);

    res.status(200).json({
      success: true,
      message: "Applications retrieved successfully",
      data: applications,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / parseInt(limit)),
        limit: parseInt(limit),
      },
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
    const application = await Apply.findById(req.params.id)
      .populate("jobId")
      .lean();

    if (!application) {
      return next(new AppError("Application not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Application retrieved successfully",
      data: application,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteApplication = async (req, res) => {
  try {
    const application = await Apply.findByIdAndDelete(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Application deleted successfully",
      data: { id: req.params.id },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
