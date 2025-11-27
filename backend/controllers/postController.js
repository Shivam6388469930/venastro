import JobPost from "../models/jobModel.js"; // Updated import name
import { AppError } from "../middleware/errorMiddleware.js"; // Added missing import

// CREATE JOB POST
export const createJob = async (req, res, next) => {
  try {
    const newJob = new JobPost(req.body);
    const savedJob = await newJob.save();

    res.status(201).json({
      success: true,
      message: "Job post created successfully",
      data: savedJob,
    });
  } catch (error) {
    next(error);
  }
};

// GET ALL JOB POSTS (PAGINATED)
export const getJobs = async (req, res, next) => {
  try {
    const { status, location, page = 1, limit = 10 } = req.query;

    // Build query
    const query = {};
    if (status) query.status = status;
    if (location) query.location = new RegExp(location, "i");

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Execute query with pagination
    const [jobs, total] = await Promise.all([
      JobPost.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit))
        .lean(),
      JobPost.countDocuments(query),
    ]);

    res.status(200).json({
      success: true,
      message: "Jobs retrieved successfully",
      data: jobs,
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

// GET SINGLE JOB POST (Includes applicationCount via Virtual)
export const getJobById = async (req, res, next) => {
  try {
    const job = await JobPost.findById(req.params.id)
      .populate("applicationCount") // Now works thanks to the Virtual in the model
      .lean();

    if (!job) {
      return next(new AppError("Job not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Job retrieved successfully",
      data: job,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE JOB POST
export const updateJob = async (req, res, next) => {
  try {
    const job = await JobPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!job) {
      return next(new AppError("Job not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Job updated successfully",
      data: job,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE JOB POST
export const deleteJob = async (req, res, next) => {
  try {
    const job = await JobPost.findByIdAndDelete(req.params.id);

    if (!job) {
      return next(new AppError("Job not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
      data: { id: req.params.id },
    });
  } catch (error) {
    next(error);
  }
};
