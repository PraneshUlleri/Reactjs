const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//create a new schema -pi
const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Book', bookSchema);