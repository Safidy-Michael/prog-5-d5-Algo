const Payment = require('../model/Payment');
const Coffee = require('../model/Coffee');

exports.createPayment = async (req, res) => {
  const { method, amount, coffeeId } = req.body;

  try {
    const coffee = await Coffee.findById(coffeeId);
    if (!coffee) return res.status(404).json({ message: 'Café non trouvé' });

    if (amount < coffee.price) {
      return res.status(400).json({ message: 'Paiement insuffisant' });
    }

    const payment = new Payment({ method, amount, coffeeId });
    await payment.save();

    return res.status(201).json({ message: 'Paiement effectué avec succès', payment });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors du paiement' });
  }
};
