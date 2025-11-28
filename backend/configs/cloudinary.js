// config/cloudinary.js
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Quick connection check
(async () => {
  try {
    const result = await cloudinary.api.ping();
    console.log("✅ Cloudinary connected:", result.status);
  } catch (err) {
    console.error("❌ Cloudinary connection failed:", err.message);
  }
})();

export default cloudinary;
