const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  coffeeBeans: Number,
  milk: Number,
  sugar: Number
});

module.exports = mongoose.model('Stock', stockSchema);
