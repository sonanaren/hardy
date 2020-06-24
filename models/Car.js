// models/Car.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = Schema({
  image: {
    type: String,
  },
});

const CarSchema = Schema({
  brand_id: {
    type: Number,
    required: true,
  },
  model_code: {
    type: String,
    required: true,
  },
  model_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price_ex_shoowroom: {
    type: String,
    required: true,
  },
  published_date: {
    type: Date,
  },
  publisher: {
    type: String,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
  images: [ImageSchema],
});

module.exports = mongoose.model("Car", CarSchema);
