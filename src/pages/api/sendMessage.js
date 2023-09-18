import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    // Destructure the request body
    const { name, email, message } = req.body;

    // Set up Nodemailer transporter, with dummy information
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'julia.gleichner79@ethereal.email',
            pass: 'zVQp2Dma91x3zTGR7E'
        }
    });

    // Email data
    const mailData = {
      from: email,
      to: 'youremail@gmail.com',
      subject: `Message From ${name}`,
      text: message,
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
  