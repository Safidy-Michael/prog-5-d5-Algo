const express = require('express');
const coffeeController = require('../controller/coffeeController');
const router = express.Router();

router.get('/', coffeeController.getAllCoffees);
module.exports = router;