const express = require('express');
const router = express.Router();
const { preApproval } = require('../lib/mercadopago');
const { notifyOwner } = require('../lib/notify');

// Nunca confiamos en el body del webhook tal cual: siempre volvemos a
// pedirle el recurso a la API de Mercado Pago con el id recibido, usando
// nuestro propio Access Token, antes de avisar que algo pasó.

async function fetchAuthorizedPayment(id) {
    const res = await fetch(`https://api.mercadopago.com/authorized_payments/${id}`, {
        headers: { Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}` }
    });
    if (!res.ok) throw new Error(`authorized_payments respondió ${res.status}`);
    return res.json();
}

router.post('/webhooks/mercadopago', async (req, res) => {
    // Mercado Pago espera una respuesta rápida (200/201); si no, reintenta.
    res.sendStatus(200);

    const { type, data } = req.body || {};
    const id = data && data.id;
    if (!id) return;

    try {
        if (type === 'subscription_preapproval' || type === 'preapproval') {
            const info = await preApproval.get({ id });
            await notifyOwner(
                `GESTIONTEC — Suscripción: ${info.status}`,
                [
                    `Motivo: ${info.reason || '-'}`,
                    `Email pagador: ${info.payer_email || '-'}`,
                    `Estado: ${info.status}`,
                    `Referencia: ${info.external_reference || '-'}`,
                    `ID suscripción: ${id}`
                ].join('\n')
            );
        } else if (type === 'subscription_authorized_payment' || type === 'authorized_payment') {
            const info = await fetchAuthorizedPayment(id);
            await notifyOwner(
                `GESTIONTEC — Cobro de suscripción: ${info.status}`,
                [
                    `Monto: $${info.transaction_amount}`,
                    `Estado: ${info.status}`,
                    `ID suscripción (preapproval): ${info.preapproval_id || '-'}`,
                    `ID cobro: ${id}`
                ].join('\n')
            );
        }
        // Otros tipos de notificación (ej. "payment" sueltos) se ignoran:
        // acá solo nos importan las suscripciones.
    } catch (err) {
        console.error('[webhook] Error procesando notificación de Mercado Pago:', err.message);
    }
});

module.exports = router;
