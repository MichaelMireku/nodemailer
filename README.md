# Automatic Email Scheduler

This Node.js application allows you to automatically send emails every Friday at 5 PM using the [node-cron](https://www.npmjs.com/package/node-cron) scheduler and [nodemailer](https://nodemailer.com/) for email sending.

## Features

- Scheduled email delivery every Friday at 5 PM.
- Configuration with your Gmail account (replace with your email configuration).
- Simple and easy-to-use setup.

## Prerequisites

- Node.js installed
- Gmail account (for sending emails)

## Installation

1. Clone the repository:

    bash
    git clone https://github.com/yourusername/automatic-email-scheduler.git
    cd automatic-email-scheduler
    

2. Install dependencies:

    bash
    npm install
    

3. Configure your Gmail account:

    Replace the placeholder values in the transporter object with your Gmail email and password in the index.js file.

4. Run the server:

    bash
    node index.js
    

## Configuration

Modify the mailOptions object in index.js to customize the email content, sender, and recipient.

javascript
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient-email@example.com',
  subject: 'Automatic Email',
  text: 'This is an automatic email scheduled for Fridays at 5 PM.',
};


## Schedule

The email is scheduled to be sent every Friday at 5 PM using the cron syntax '0 17 * * 5'. You can adjust this schedule by modifying the cron expression.

## Important Note

- Keep your email and password secure. It's recommended to use an application-specific password for enhanced security.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

