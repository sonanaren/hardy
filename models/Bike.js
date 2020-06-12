// models/Bike.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = Schema({
  image: {
    type: String,
  },
});

const BikeSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
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

module.exports = mongoose.model("Bike", BikeSchema);
