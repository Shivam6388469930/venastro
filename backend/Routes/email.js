const Emailcontroller = require('../controllers/emailController.js');
const express = require('express');
const emailRoute = express.Router();
emailRoute.post('/send', Emailcontroller.sendEmail);
module.exports = emailRoute;