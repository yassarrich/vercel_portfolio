import nodemailer from 'nodemailer';
import 'dotenv/config';

export default async (req, res) => {
  if (req.method === 'POST') {
    // Destructure the request body
    const { name, email, message } = req.body;
    var obj = JSON.stringify(req.body);
    // Set up Nodemailer transporter, with dummy information
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    // Email data
    const mailData = {
      from: process.env.TO_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `Message From ${name} Email: ${email}`,
      text: obj,
      html: `<p>${message}</p>`,
    };

    // Send the email
    try {
      await transporter.sendMail(mailData);
      res.status(200).json({ status: 'Message received and email sent' });
    } catch (error) {
      console.log('Error sending email:', error);
      res.status(500).json({ status: 'Internal Server Error' });
    }

  } else {
    res.status(405).json({ status: 'Method Not Allowed' });
  }
};
  