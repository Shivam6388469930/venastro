// const transporter = require("../configs/mail");
// const Email = require("../models/mails");
import transporter from "../configs/mail.js";
import Email from "../models/mails.js";

export const sendEmail = async (req, res) => {
  try {
    const { name, email, phone, message, budget, service, timeline, company } = req.body;

    // Enhanced validation
    if (!name || !email || !message || !service) {
      return res.status(400).json({
        status: "failed",
        message: "Name, email, service, and message are required fields.",
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: "failed",
        message: "Please provide a valid email address.",
      });
    }

    // Save to database
    const emailRecord = await Email.create({ 
      name, 
      email, 
      phone, 
      message, 
      budget, 
      service, 
      timeline,
      company,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });

    // Get current date and time
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const formattedTime = now.toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    // Enhanced email template
    const mailOptions = {
      from: {
        name: "Ven Astro Website",
        address: process.env.EMAIL_USER
      },
      to: process.env.EMAIL_USER,
      subject: `🎯 New Lead: ${service} Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
                
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Inter', sans-serif;
                    line-height: 1.6;
                    color: #333;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    padding: 20px;
                }
                
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background: white;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                
                .header {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    padding: 30px;
                    text-align: center;
                    color: white;
                }
                
                .logo {
                    font-size: 28px;
                    font-weight: 700;
                    margin-bottom: 10px;
                }
                
                .tagline {
                    font-size: 16px;
                    opacity: 0.9;
                    font-weight: 300;
                }
                
                .content {
                    padding: 40px;
                }
                
                .section {
                    margin-bottom: 30px;
                    padding: 20px;
                    background: #f8fafc;
                    border-radius: 12px;
                    border-left: 4px solid #667eea;
                }
                
                .section-title {
                    color: #2d3748;
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 15px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .detail-row {
                    display: flex;
                    justify-content: space-between;
                    padding: 8px 0;
                    border-bottom: 1px solid #e2e8f0;
                }
                
                .detail-row:last-child {
                    border-bottom: none;
                }
                
                .label {
                    font-weight: 500;
                    color: #4a5568;
                    min-width: 120px;
                }
                
                .value {
                    color: #2d3748;
                    font-weight: 400;
                    text-align: right;
                    flex: 1;
                }
                
                .message-box {
                    background: #edf2f7;
                    padding: 20px;
                    border-radius: 8px;
                    margin-top: 10px;
                    border-left: 3px solid #4299e1;
                }
                
                .priority-badge {
                    display: inline-block;
                    padding: 4px 12px;
                    background: #fed7d7;
                    color: #c53030;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 600;
                    margin-left: 10px;
                }
                
                .footer {
                    background: #2d3748;
                    color: white;
                    padding: 30px;
                    text-align: center;
                }
                
                .contact-info {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    margin: 20px 0;
                    flex-wrap: wrap;
                }
                
                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 14px;
                }
                
                .timestamp {
                    background: #4a5568;
                    padding: 10px 20px;
                    border-radius: 25px;
                    display: inline-block;
                    margin-top: 15px;
                    font-size: 12px;
                }
                
                .urgency-note {
                    background: #fff5f5;
                    border: 1px solid #fed7d7;
                    padding: 15px;
                    border-radius: 8px;
                    margin-top: 20px;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="logo">Ven Astro Digital Solution</div>
                    <div class="tagline">New Client Inquiry Received</div>
                </div>
                
                <div class="content">
                    <div class="section">
                        <div class="section-title">
                            📋 Lead Information
                            ${timeline === 'urgent' ? '<span class="priority-badge">URGENT</span>' : ''}
                        </div>
                        <div class="detail-row">
                            <span class="label">Name:</span>
                            <span class="value"><strong>${name}</strong></span>
                        </div>
                        <div class="detail-row">
                            <span class="label">Company:</span>
                            <span class="value">${company || 'Not provided'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="label">Email:</span>
                            <span class="value"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></span>
                        </div>
                        <div class="detail-row">
                            <span class="label">Phone:</span>
                            <span class="value">
                                ${phone ? `<a href="tel:${phone}" style="color: #667eea; text-decoration: none;">${phone}</a>` : 'Not provided'}
                            </span>
                        </div>
                    </div>
                    
                    <div class="section">
                        <div class="section-title">🎯 Service Details</div>
                        <div class="detail-row">
                            <span class="label">Service:</span>
                            <span class="value"><strong>${service}</strong></span>
                        </div>
                        <div class="detail-row">
                            <span class="label">Budget:</span>
                            <span class="value">${budget ? budget.replace(/_/g, ' - ').replace(/k/g,',000').replace(/L/,'00,000') : 'Not specified'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="label">Timeline:</span>
                            <span class="value">${timeline ? timeline.charAt(0).toUpperCase() + timeline.slice(1) : 'Not specified'}</span>
                        </div>
                    </div>
                    
                    <div class="section">
                        <div class="section-title">💬 Project Requirements</div>
                        <div class="message-box">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    
                    ${timeline === 'urgent' ? `
                    <div class="urgency-note">
                        <strong>🚨 URGENT REQUEST:</strong> Client has requested immediate attention. Please respond within 2 hours.
                    </div>
                    ` : ''}
                </div>
                
                <div class="footer">
                    <div class="contact-info">
                        <div class="contact-item">
                            <span>📧</span>
                            <span>venastro.co@gmail.com</span>
                        </div>
                        <div class="contact-item">
                            <span>📱</span>
                            <span>+91 8009426038</span>
                        </div>
                        <div class="contact-item">
                            <span>🌐</span>
                            <span>www.venastro.in</span>
                        </div>
                    </div>
                    
                    <div class="timestamp">
                        Received on ${formattedDate} at ${formattedTime}
                    </div>
                    
                    <div style="margin-top: 20px; font-size: 12px; opacity: 0.8;">
                        Lead ID: ${emailRecord._id} | IP: ${req.ip}
                    </div>
                </div>
            </div>
        </body>
        </html>
      `,
    };

    // Send confirmation email to client
    const clientMailOptions = {
      from: {
        name: "Ven Astro Digital Solution",
        address: process.env.EMAIL_USER
      },
      to: email,
      subject: "Thank You for Contacting Ven Astro Digital Solution",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { padding: 30px; background: #f8fafc; }
                .footer { padding: 20px; text-align: center; background: #2d3748; color: white; border-radius: 0 0 10px 10px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Thank You, ${name}!</h1>
                    <p>We've received your inquiry for ${service}</p>
                </div>
                <div class="content">
                    <p><strong>What happens next?</strong></p>
                    <ul>
                        <li>Our team will review your requirements</li>
                        <li>We'll contact you within 2 hours (for urgent requests) or 24 hours</li>
                        <li>We'll provide a detailed proposal and consultation</li>
                    </ul>
                    <p><strong>Reference:</strong> ${service} - ${budget || 'Custom Quote'}</p>
                </div>
                <div class="footer">
                    <p><strong>Ven Astro Digital Solution</strong><br>
                    📧 venastro.co@gmail.com | 📱 +91 8009426038</p>
                </div>
            </div>
        </body>
        </html>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(clientMailOptions)
    ]);

    res.status(200).json({
      status: "success",
      message: "Thank you! Your inquiry has been submitted successfully. We'll contact you within 2-4 hours.",
      data: {
        inquiryId: emailRecord._id,
        service: service,
        expectedResponse: timeline === 'urgent' ? 'Within 2 hours' : 'Within 24 hours'
      }
    });

  } catch (error) {
    console.error("Email Error:", error);
    
    // Specific error handling
    if (error.code === 'EAUTH') {
      return res.status(500).json({
        status: "failed",
        message: "Email configuration error. Please contact support."
      });
    }
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        status: "failed",
        message: "Invalid data provided. Please check your inputs."
      });
    }

    res.status(500).json({
      status: "failed",
      message: "We're experiencing technical difficulties. Please try again in a few minutes or contact us directly.",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};