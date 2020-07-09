const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FuelSchema = Schema({
  tank_capacity: String,
  mileage: String,
  mileage_city: String,
  mileage_highway: String,
});

module.exports = FuelSchema;
