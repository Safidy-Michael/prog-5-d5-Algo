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