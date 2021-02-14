const mongoose = require('mongoose');
const validator = require('validator');

let CarSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  gearbox: {
    type: String,
    required: true,
    // validate: {
    //   validator: validator,
    //   message: 'Automatic/Manual',
    // },
  },
});

let Car = mongoose.model('Car', CarSchema);

module.exports = Car;
