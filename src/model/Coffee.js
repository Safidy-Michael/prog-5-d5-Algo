const mongoose = require('mongoose');

const CoffeeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  ingredients: {
    coffee: { type: Number, default: 0 },
    milk: { type: Number, default: 0 },
    sugar: { type: Number, default: 0 }
  }
});

module.exports = mongoose.model('Coffee', CoffeeSchema);
