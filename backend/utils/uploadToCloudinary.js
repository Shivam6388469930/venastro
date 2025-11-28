import cloudinary from "../configs/cloudinary.js";
import { AppError } from "../middleware/errorHandler.js";

/**
 * Upload file buffer to Cloudinary
 * @param {Buffer} fileBuffer - File buffer from multer
 * @param {String} folder - Cloudinary folder name
 * @param {String} originalName - Original file name
 * @returns {Object} - { url, public_id }
 */
export const uploadToCloudinary = (fileBuffer, folder, originalName) => {
  return new Promise((resolve, reject) => {
    // Create a unique filename
    const fileName = `${Date.now()}-${originalName.replace(/\s+/g, "_")}`;

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: folder, // e.g., "venastro/resumes" or "venastro/cover-letters"
        resource_type: "raw", // For PDFs and documents
        public_id: fileName,
        use_filename: true,
      },
      (error, result) => {
        if (error) {
          reject(new AppError("File upload failed", 500));
        } else {
          resolve({
            url: result.secure_url,
            public_id: result.public_id,
          });
        }
      }
    );

    // Convert buffer to stream and pipe to cloudinary
    uploadStream.end(fileBuffer);
  });
};

/**
 * Delete file from Cloudinary
 * @param {String} publicId - Cloudinary public_id
 * @returns {Promise}
 */
export const deleteFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId, {
      resource_type: "raw",
    });
    return true;
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error);
    return false;
  }
};