const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  method: {
    type: String,
    enum: ['cash', 'card', 'mobile'],
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  coffeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coffee',
    required: true
  }
});

module.exports = mongoose.model('Payment', paymentSchema);
