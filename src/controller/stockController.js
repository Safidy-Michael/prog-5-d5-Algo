const Stock = require('../model/Stock');

exports.setStock = async (req, res) => {
  const { coffeeBeans, milk, sugar } = req.body;

  try {
    let stock = await Stock.findOne();

    if (stock) {
      stock.coffeeBeans = coffeeBeans;
      stock.milk = milk;
      stock.sugar = sugar;
    } else {
      stock = new Stock({ coffeeBeans, milk, sugar });
    }

    await stock.save();
    res.status(200).json({ message: 'Stock mis à jour', stock });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du stock', error: err.message });
  }
};

exports.getStock = async (req, res) => {
  try {
    const stock = await Stock.findOne();
    if (!stock) return res.status(404).json({ message: 'Stock non trouvé' });
    res.status(200).json(stock);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération du stock', error: err.message });
  }
};
