import express from "express";
import { validateApplication } from "../middleware/validationMiddleware.js";
import {
  applyJob,
  deleteApplication,
  getAllApplications,
  getApplicationById,
  getApplicationsByJob,
} from "../controllers/applyCOntroller.js";

const applyRouter = express.Router();

applyRouter.post("/", validateApplication, applyJob);
applyRouter.get("/", getAllApplications);
applyRouter.get("/job/:id", getApplicationsByJob);
applyRouter.get("/:id", getApplicationById);
applyRouter.delete("/:id", deleteApplication);

export default applyRouter;
