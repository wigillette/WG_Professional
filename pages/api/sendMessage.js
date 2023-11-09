import { NextResponse } from "next/server";

export default async function handler(req, res) {
    const { email, message } = req.body;

    if (email && message && message.length > 0 && email.length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.json({response: 'Successfully sent message!'});
        res.status(200).end();
    } else {
        res.json({response: 'Failed to send message.'});
        res.status(405).end();
    }
}