const Coffee = require('../model/Coffee');

exports.getAllCoffees = async (req, res) => {
    try{
        const coffees = await Coffee.find();
        res.status(200).json({
            status: 'success',
            data: {
                coffees
            }
        });
    }
        catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}

exports.createCoffee = async (req, res) => {
     try {
    const newCoffee = new Coffee(req.body);
    await newCoffee.save();
    res.status(201).json(newCoffee);
  } catch (error) {
    res.status(400).json({ message: 'Erreur création café', error });
  }
};

exports.orderCoffeeByType = async (req, res) => {
  const coffeeType = req.params.type;
  const { method, amount } = req.body;

  try {
    const coffee = await Coffee.findOne({ name: coffeeType });
    if (!coffee) return res.status(404).json({ message: 'Coffee type not found' });

    if (amount < coffee.price) {
      return res.status(400).json({ message: 'Insufficient payment' });
    }


    const stock = await Stock.findOne();
    if (!stock) return res.status(500).json({ message: 'Stock not initialized' });

    if (
      stock.coffeeBeans < coffee.ingredients.coffee ||
      stock.milk < coffee.ingredients.milk ||
      stock.sugar < coffee.ingredients.sugar
    ) {
      return res.status(400).json({ message: 'Insufficient stock to prepare this coffee' });
    }

    stock.coffeeBeans -= coffee.ingredients.coffee;
    stock.milk -= coffee.ingredients.milk;
    stock.sugar -= coffee.ingredients.sugar;
    await stock.save();

    const payment = new Payment({ method, amount, coffeeId: coffee._id });
    await payment.save();

    return res.status(201).json({ message: `Your ${coffeeType} is ready!`, payment });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error processing order' });
  }
};