const nodemailer = require('nodemailer');

let transporter = null;

function getTransporter() {
    if (transporter) return transporter;
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        return null;
    }
    transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
    return transporter;
}

async function sendEmail(subject, text) {
    const to = process.env.NOTIFY_EMAIL_TO;
    const t = getTransporter();
    if (!t || !to) {
        console.warn('[notify] Email no configurado, se omite el envío.', { subject });
        return;
    }
    try {
        await t.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject,
            text
        });
    } catch (err) {
        console.error('[notify] Error enviando email:', err.message);
    }
}

async function sendWhatsApp(text) {
    const phone = process.env.CALLMEBOT_PHONE;
    const apikey = process.env.CALLMEBOT_APIKEY;
    if (!phone || !apikey) {
        console.warn('[notify] WhatsApp (CallMeBot) no configurado, se omite el envío.');
        return;
    }
    try {
        const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(phone)}&text=${encodeURIComponent(text)}&apikey=${encodeURIComponent(apikey)}`;
        const res = await fetch(url);
        if (!res.ok) {
            console.error('[notify] CallMeBot respondió con error:', res.status);
        }
    } catch (err) {
        console.error('[notify] Error enviando WhatsApp:', err.message);
    }
}

async function notifyOwner(subject, text) {
    await Promise.all([sendEmail(subject, text), sendWhatsApp(text)]);
}

module.exports = { sendEmail, sendWhatsApp, notifyOwner };
