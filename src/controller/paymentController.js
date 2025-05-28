const Payment = require('../model/Payment');
const Coffee = require('../model/Coffee');
const Stock = require('../model/Stock');

exports.createPayment = async (req, res) => {
  const { method, amount, coffeeId } = req.body;

  try {
    const coffee = await Coffee.findById(coffeeId);
    if (!coffee) return res.status(404).json({ message: 'Café non trouvé' });

    if (amount < coffee.price) {
      return res.status(400).json({ message: 'Paiement insuffisant' });
    }
    const stock = await Stock.findOne();
    if (!stock) return res.status(500).json({ message: 'Stock non initialisé' });

     if (
        stock.coffeeBeans < coffee.coffeeBeans ||
        stock.milk < coffee.milk ||
        stock.sugar < coffee.sugar
      ) {
          return res.status(400).json({ message: 'Stock insuffisant pour préparer ce café' });
        }
        stock.coffeeBeans -= coffee.coffeeBeans;
        stock.milk -= coffee.milk;
        stock.sugar -= coffee.sugar;

        await stock.save();

    const payment = new Payment({ method, amount, coffeeId });
    await payment.save();

    return res.status(201).json({ message: 'Paiement effectué avec succès', payment });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Erreur lors du paiement' });
  }
};
