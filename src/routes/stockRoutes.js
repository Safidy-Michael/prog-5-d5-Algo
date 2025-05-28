const express = require('express');
const router = express.Router();
const stockController = require('../controller/stockController');

router.get('/', stockController.getStock);
router.post('/', stockController.setStock);

module.exports = router;
