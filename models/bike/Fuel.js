const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FuelSchema = Schema({
  tank_capacity: String,
  reserve_fuel_capacity: String,
  mileage: String,
  riding_range: String,
});

module.exports = FuelSchema;
