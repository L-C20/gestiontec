// Se usa la API HTTP de Resend en vez de SMTP directo: Railway bloquea los
// puertos SMTP (587/465/25) fuera del plan Pro, pero el puerto 443 (HTTPS)
// siempre funciona.
async function sendEmail(subject, text) {
    const to = process.env.NOTIFY_EMAIL_TO;
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || !to) {
        console.warn('[notify] Email no configurado, se omite el envío.', { subject });
        return;
    }
    try {
        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: process.env.RESEND_FROM || 'GESTIONTEC <onboarding@resend.dev>',
                to: [to],
                subject,
                text
            })
        });
        if (!res.ok) {
            console.error('[notify] Resend respondió con error:', res.status, await res.text());
        }
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
