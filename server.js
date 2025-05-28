require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const coffeeRoutes = require('./src/routes/coffeeRoutes');
const paiementRoutes = require('./src/routes/paymentRoutes');

const app = express();



mongoose.connect('mongodb://localhost:27017/taskmanager', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connecté à MongoDB');
}).catch((err) => {
  console.error('Erreur de connexion à MongoDB', err);
});


app.use(express.json());

app.use('/api/coffees', coffeeRoutes);
app.use('/api/payment', paiementRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur port ${PORT}`);
});
