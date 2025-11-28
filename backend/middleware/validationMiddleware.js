import { AppError } from "./errorHandler.js";// Fixed path consistency

// Helper validation functions (placed here for cleaner export list)
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone) => {
  // Basic validation for at least 10 digits/chars
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone);
};

const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const isValidObjectId = (id) => {
  return /^[0-9a-fA-F]{24}$/.test(id);
};

// Email validation
export const validateEmail = (req, res, next) => {
  const { name, email, phone, message } = req.body;

  const errors = [];

  if (!name || name.trim().length < 2) {
    errors.push("Name must be at least 2 characters long");
  }

  if (!email || !isValidEmail(email)) {
    errors.push("Valid email is required");
  }

  if (!phone || !isValidPhone(phone)) {
    errors.push("Valid phone number is required");
  }

  if (!message || message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long");
  }

  if (errors.length > 0) {
    return next(new AppError(errors.join(", "), 400));
  }

  next();
};

// Job validation
export const validateJob = (req, res, next) => {
  const {
    title,
    companyName,
    description,
    location,
    responsibilities,
    requirements,
  } = req.body;

  const errors = [];

  if (!title || title.trim().length < 3) {
    errors.push("Job title must be at least 3 characters long");
  }

  if (!companyName || companyName.trim().length < 2) {
    errors.push("Company name must be at least 2 characters long");
  }

  if (!description || description.trim().length < 20) {
    errors.push("Description must be at least 20 characters long");
  }

  if (!location || location.trim().length < 2) {
    errors.push("Location is required");
  }

  if (!Array.isArray(responsibilities) || responsibilities.length === 0) {
    errors.push("At least one responsibility is required");
  } else if (
    responsibilities.some((r) => typeof r !== "string" || r.trim().length === 0)
  ) {
    errors.push("All responsibilities must be non-empty strings");
  }

  if (!Array.isArray(requirements) || requirements.length === 0) {
    errors.push("At least one requirement is required");
  } else if (
    requirements.some((r) => typeof r !== "string" || r.trim().length === 0)
  ) {
    errors.push("All requirements must be non-empty strings");
  }

  if (errors.length > 0) {
    return next(new AppError(errors.join(", "), 400));
  }

  next();
};

// Application validation
// export const validateApplication = (req, res, next) => {
//   const { jobId, fullName, email, phone, resume } = req.body;

//   const errors = [];

//   if (!jobId || !isValidObjectId(jobId)) {
//     errors.push("Valid job ID is required");
//   }

//   if (!fullName || fullName.trim().length < 2) {
//     errors.push("Full name must be at least 2 characters long");
//   }

//   if (!email || !isValidEmail(email)) {
//     errors.push("Valid email is required");
//   }

//   if (!phone || !isValidPhone(phone)) {
//     errors.push("Valid phone number is required");
//   }

//   if (!resume || !isValidUrl(resume)) {
//     errors.push("Valid resume URL is required (must be a full URL)");
//   }

//   if (errors.length > 0) {
//     return next(new AppError(errors.join(", "), 400));
//   }

//   next();
// };
export const validateApplication = (req, res, next) => {
  const { jobId, fullName, email, phone, resume } = req.body;
  const files = req.files; // Multer puts files here when using upload.fields

  const errors = [];

  if (!jobId || !isValidObjectId(jobId)) {
    errors.push("Valid job ID is required");
  }

  if (!fullName || fullName.trim().length < 2) {
    errors.push("Full name must be at least 2 characters long");
  }

  if (!email || !isValidEmail(email)) {
    errors.push("Valid email is required");
  }

  if (!phone || !isValidPhone(phone)) {
    errors.push("Valid phone number is required");
  }

  // Check either resume URL is valid OR resume file is uploaded
  if ((!resume || resume.trim() === "") && (!files || !files.resume)) {
    errors.push("Resume URL or file upload is required");
  } else if (resume && !isValidUrl(resume)) {
    errors.push("Valid resume URL is required (must be a full URL)");
  }

  if (errors.length > 0) {
    return next(new AppError(errors.join(", "), 400));
  }

  next();
};
