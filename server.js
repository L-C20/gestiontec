require('dotenv').config();

const express = require('express');
const path = require('path');

const subscribeRoutes = require('./routes/subscribe');
const webhookRoutes = require('./routes/webhook');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', subscribeRoutes);
app.use('/api', webhookRoutes);

app.use(express.static(path.join(__dirname)));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`✅ GESTIONTEC corriendo en puerto ${PORT}`);
    console.log(`📍 http://localhost:${PORT}`);
});
