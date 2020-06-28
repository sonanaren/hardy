const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EngineSchema = Schema({
  cc: String,
  no_of_cylinders: String,
  max_power: String,
  max_torque: String,
  valves_per_cylinder: String,
  fuel_delivery: String,
  cooling_system: String,
  starting_mechanism: String,
});

module.exports = EngineSchema;