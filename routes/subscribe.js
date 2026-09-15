const express = require('express');
const router = express.Router();
const { preApproval } = require('../lib/mercadopago');
const { notifyOwner } = require('../lib/notify');
const DATA = require('../js/data.js');

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Plan oculto para probar un cobro real de monto bajo sin exponer ese precio
// en el sitio público. Solo responde si ALLOW_TEST_PLAN=true en el entorno;
// sacar esa variable (o este bloque) una vez terminada la prueba.
const TEST_PLAN_ID = '__test_real__';
const TEST_PLAN = { id: TEST_PLAN_ID, name: 'Prueba real', price: 10, currency: 'ARS', period: 'mes' };

router.post('/subscribe', async (req, res) => {
    const { planId, name, email, phone, business } = req.body || {};

    if (!planId || !name || !email) {
        return res.status(400).json({ error: 'Faltan datos obligatorios (nombre, email o plan).' });
    }
    if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'El email no es válido.' });
    }

    const plan = (planId === TEST_PLAN_ID && process.env.ALLOW_TEST_PLAN === 'true')
        ? TEST_PLAN
        : DATA.plans.find(p => p.id === planId);
    if (!plan) {
        return res.status(400).json({ error: 'El plan seleccionado no existe.' });
    }

    const baseUrl = process.env.PUBLIC_BASE_URL;
    if (!baseUrl) {
        console.error('[subscribe] Falta PUBLIC_BASE_URL en el entorno.');
        return res.status(500).json({ error: 'El servidor no está configurado correctamente. Probá más tarde.' });
    }

    try {
        const result = await preApproval.create({
            body: {
                reason: `GESTIONTEC - Plan ${plan.name}`,
                external_reference: `${plan.id}:${Date.now()}`,
                payer_email: email,
                back_url: `${baseUrl}/gracias.html`,
                notification_url: `${baseUrl}/api/webhooks/mercadopago`,
                auto_recurring: {
                    frequency: 1,
                    frequency_type: 'months',
                    transaction_amount: plan.price,
                    currency_id: plan.currency || 'ARS'
                },
                status: 'pending'
            }
        });

        // Aviso inmediato con los datos de contacto: el webhook posterior
        // (cuando Mercado Pago confirme el pago) no trae nombre/teléfono,
        // solo el email del pagador — así no se pierde ese dato.
        notifyOwner(
            `GESTIONTEC — Nueva intención de suscripción (${plan.name})`,
            [
                `Plan: ${plan.name} ($${plan.price} ${plan.currency}/${plan.period})`,
                `Nombre: ${name}`,
                `Negocio: ${business || '-'}`,
                `Email: ${email}`,
                `Teléfono: ${phone || '-'}`,
                `Estado: pendiente de que complete el pago en Mercado Pago`
            ].join('\n')
        ).catch(() => {});

        // Bug conocido de Mercado Pago (activo desde 2026-09-02): el init_point
        // viene con "&activation=true" y esa página da "Esta página no existe".
        // Sin ese parámetro, la misma URL funciona bien.
        const checkoutUrl = new URL(result.init_point);
        checkoutUrl.searchParams.delete('activation');

        return res.json({ init_point: checkoutUrl.toString() });
    } catch (err) {
        console.error('[subscribe] Error creando la suscripción:', err.message);
        return res.status(502).json({ error: 'No pudimos iniciar la suscripción con Mercado Pago. Intentá de nuevo en unos minutos.' });
    }
});

module.exports = router;
