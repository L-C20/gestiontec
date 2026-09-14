const { MercadoPagoConfig, PreApproval, Payment } = require('mercadopago');

if (!process.env.MP_ACCESS_TOKEN) {
    console.warn('[mercadopago] Falta MP_ACCESS_TOKEN en las variables de entorno.');
}

const client = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN || ''
});

const preApproval = new PreApproval(client);
const payment = new Payment(client);

module.exports = { client, preApproval, payment };
