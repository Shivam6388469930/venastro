import Apply from "../models/apply.js";
import JobPost from "../models/job.js"; // Updated import name
import { AppError } from "../middleware/errorHandler.js"; // Added missing import

// ======================
// APPLY FOR JOB
// ======================
export const applyJob = async (req, res, next) => {
  try {
    const { jobId, fullName, email, phone, resume, coverLetter } = req.body;

    // Check job exists
    const job = await JobPost.findById(jobId);
    if (!job) {
      return next(new AppError("Job not found", 404)); // Use AppError
    }

    if (job.status !== "active") {
      return next(
        new AppError("This job is no longer accepting applications", 400)
      ); // Use AppError
    }

    const existingApplication = await Apply.findOne({ jobId, email });
    if (existingApplication) {
      return next(new AppError("You have already applied for this job", 400)); // Use AppError
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
    next(error); // Pass error to global handler
  }
};

// ======================
// GET ALL APPLICATIONS (PAGINATED)
// ======================
export const getAllApplications = async (req, res, next) => {
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
    next(error);
  }
};

// ======================
// GET APPLICATIONS BY JOB ID (FIXED LOGIC)
// ======================
export const getApplicationsByJob = async (req, res, next) => {
  try {
    const { id: jobId } = req.params; // Correctly get jobId from URL

    const apps = await Apply.find({ jobId }) // Find all applications matching the jobId
      .populate("jobId", "title companyName location")
      .sort({ createdAt: -1 })
      .lean();

    res.status(200).json({
      success: true,
      message: `Applications for job ${jobId} retrieved successfully`,
      count: apps.length,
      data: apps,
    });
  } catch (error) {
    next(error);
  }
};

// ======================
// GET APPLICATION BY ID
// ======================
export const getApplicationById = async (req, res, next) => {
  try {
    const application = await Apply.findById(req.params.id)
      .populate("jobId")
      .lean();

    if (!application) {
      return next(new AppError("Application not found", 404)); // Use AppError
    }

    res.status(200).json({
      success: true,
      message: "Application retrieved successfully",
      data: application,
    });
  } catch (error) {
    next(error);
  }
};

// ======================
// DELETE APPLICATION
// ======================
export const deleteApplication = async (req, res, next) => {
  try {
    const application = await Apply.findByIdAndDelete(req.params.id);

    if (!application) {
      return next(new AppError("Application not found", 404)); // Use AppError
    }

    res.status(200).json({
      success: true,
      message: "Application deleted successfully",
      data: { id: req.params.id },
    });
  } catch (error) {
    next(error);
  }
};
