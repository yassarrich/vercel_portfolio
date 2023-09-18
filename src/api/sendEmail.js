const sgMail = require('@sendgrid/mail');
const sendGridApiKey = process.env.SENDGRID_API_KEY;
console.log(sendGridApiKey)
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//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
module.exports = async (req, res) => {
  const { name, email, message } = req.body;

  const content = {
    to: 'your-email@example.com',
    from: email,
    subject: `New Message From ${name}`,
    text: message,
    html: `<p>${message}</p>`
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
};
