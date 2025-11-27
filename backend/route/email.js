import { Router } from "express";
import { sendEmail } from "../controllers/emailController.js"; // Note the .js extension and named import

const emailRoute = Router();

// Assuming Emailcontroller's sendEmail function is exported as 'sendEmail'
emailRoute.post("/send", sendEmail);

export default emailRoute;
