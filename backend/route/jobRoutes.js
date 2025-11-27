import express from "express";
import { validateJob } from "../middleware/validationMiddleware.js";
import {
  createJob,
  deleteJob,
  getJobById,
  getJobs,
  updateJob,
} from "../controllers/postController.js";

const jobRouter = express.Router();

jobRouter.post("/", validateJob, createJob);
jobRouter.get("/", getJobs);
jobRouter.get("/:id", getJobById);
jobRouter.put("/:id", validateJob, updateJob);
jobRouter.delete("/:id", deleteJob);

export default jobRouter;