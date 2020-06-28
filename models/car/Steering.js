const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SteeringSchema = Schema({
  power_steering: String,
  steering_type: String,
  adjustable_power_steering: String,
});

module.exports = SteeringSchema;
