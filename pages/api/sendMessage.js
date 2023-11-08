const nodeoutlook = require('nodejs-nodemailer-outlook')
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;


export default async function handler(req, res) {
    const { email, message } = req.body;
    console.log(EMAIL_USER, EMAIL_PASS);

    console.log(email, message);

    if (email && message && message.length > 0 && email.length > 0) {
        const mailOptions = {
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS
            },
            from: EMAIL_USER,
            to: 'wgillette02@gmail.com',
            subject: `William Gillette Professional | Message from ${EMAIL_USER}`,
            html: `Hello Will,<br/>${message}<br/>From, ${EMAIL_USER}`,
            onError: (e) => { console.log(e); res.status(500).json({response: 'Failed to send message.'}); },
            onSuccess: (i) => res.status(200).json({response: 'Successfully sent message!'})
        }

        nodeoutlook.sendEmail(mailOptions);
    }

    res.status(200).json({response: 'Invalid message or email.'})
}