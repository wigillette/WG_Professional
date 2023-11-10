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
    let response = 'Failed to send message.';
    let statusCode = 405;
    if (email && message && message.length > 0 && email.length > 0) {
        // Send message to email? Or update a database?

        response = 'Successfully sent message!';
        statusCode = 200;
    }
    res.json({response: response});
    res.status(statusCode).end();
}

export default handler;