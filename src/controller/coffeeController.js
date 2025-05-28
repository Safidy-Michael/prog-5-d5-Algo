const Coffee = require('../models/coffeeModel');

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