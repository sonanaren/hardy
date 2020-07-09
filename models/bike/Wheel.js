const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WheelSchema = Schema({
  wheel_size: String,
  wheel_type: String,
  front_tyre: String,
  rear_tyre: String,
});

module.exports = WheelSchema;
