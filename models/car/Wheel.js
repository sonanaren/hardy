const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WheelSchema = Schema({
  wheel_type: String,
  tyre_type: String,
  front_tyre_size: String,
  rear_tyre_size: String,
});

module.exports = WheelSchema;
