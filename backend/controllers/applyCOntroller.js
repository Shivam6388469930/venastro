import Apply from "../models/apply.js";
import JobPost from "../models/job.js";
import { AppError } from "../middleware/errorHandler.js";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
} from "../utils/uploadToCloudinary.js";

// ======================
// APPLY FOR JOB
// ======================
export const applyJob = async (req, res, next) => {
  try {
    const { jobId, fullName, email, phone } = req.body;

    // Check if files are uploaded
    if (!req.files || !req.files.resume) {
      return next(new AppError("Resume file is required", 400));
    }

    // Check job exists
    const job = await JobPost.findById(jobId);
    if (!job) {
      return next(new AppError("Job not found", 404));
    }

    if (job.status !== "active") {
      return next(
        new AppError("This job is no longer accepting applications", 400)
      );
    }

    // Check for existing application
    const existingApplication = await Apply.findOne({ jobId, email });
    if (existingApplication) {
      return next(new AppError("You have already applied for this job", 400));
    }

    // Upload resume to Cloudinary
    const resumeFile = req.files.resume[0];
    const resumeData = await uploadToCloudinary(
      resumeFile.buffer,
      "venastro/resumes",
      resumeFile.originalname
    );

    // Prepare application data
    const applicationData = {
      jobId,
      fullName,
      email,
      phone,
      resume: {
        url: resumeData.url,
        public_id: resumeData.public_id,
      },
    };

    // Upload cover letter if provided
    if (req.files.coverLetter) {
      const coverLetterFile = req.files.coverLetter[0];
      const coverLetterData = await uploadToCloudinary(
        coverLetterFile.buffer,
        "venastro/cover-letters",
        coverLetterFile.originalname
      );

      applicationData.coverLetter = {
        url: coverLetterData.url,
        public_id: coverLetterData.public_id,
      };
    }

    // Save application
    const application = await Apply.create(applicationData);
    await application.populate("jobId", "title companyName location");

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (error) {
    // If error occurs, try to clean up uploaded files
    if (req.uploadedFiles) {
      for (const publicId of req.uploadedFiles) {
        await deleteFromCloudinary(publicId);
      }
    }
    next(error);
  }
};

// ======================
// GET ALL APPLICATIONS (PAGINATED)
// ======================
export const getAllApplications = async (req, res, next) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;

    const query = {};
    if (status) query.status = status;

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
// GET APPLICATIONS BY JOB ID
// ======================
export const getApplicationsByJob = async (req, res, next) => {
  try {
    const { id: jobId } = req.params;

    const apps = await Apply.find({ jobId })
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
      return next(new AppError("Application not found", 404));
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
    const application = await Apply.findById(req.params.id);

    if (!application) {
      return next(new AppError("Application not found", 404));
    }

    // Delete resume from Cloudinary
    if (application.resume && application.resume.public_id) {
      await deleteFromCloudinary(application.resume.public_id);
    }

    // Delete cover letter from Cloudinary if it exists
    if (application.coverLetter && application.coverLetter.public_id) {
      await deleteFromCloudinary(application.coverLetter.public_id);
    }

    // Delete application from database
    await Apply.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Application and associated files deleted successfully",
      data: { id: req.params.id },
    });
  } catch (error) {
    next(error);
  }
};
