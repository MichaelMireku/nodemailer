const express = require('express');
const cron = require('node-cron');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Create a nodemailer transporter (replace with your email configuration)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

// Define the email content
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient-email@example.com',
  subject: 'Automatic Email',
  text: 'This is an automatic email scheduled for Fridays at 5 PM.',
};

// Schedule the email to be sent every Friday at 5 PM
cron.schedule('0 17 * * 5', () => {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(Server is running at http://localhost:${port});
});