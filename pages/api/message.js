const nodemailer = require('nodemailer');
require('dotenv').config();

const handler = (req, res) => {
    switch (req.method) {
        case 'POST':
            sendMessage(req, res);
            break;
        default:
            break;
    }
}

const sendMessage = (req, res) => {
    const { email, message } = req.body;
    res.setHeader('Content-Type', 'application/json');
    if (email && message && message.length > 0 && email.length > 0) {
        // Send message to email? Or update a database?
        // Set up Nodemailer transport
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'wgillette02@gmail.com',
            subject: `William Gillette Professional | Message from ${email}`,
            html: `Dear Will,<br/>${message}<br/>From, ${email}`,
        };

        // Send the email
        transporter.sendMail(mailOptions, (error) => {
            res.json({response: error.message || 'Successfully sent message!'});
            res.status(200).end();
            console.log(error);
        });
    } else {
        res.json({response: 'Failed to send message.'});
        res.status(405).end();
    }
    
}

export default handler;