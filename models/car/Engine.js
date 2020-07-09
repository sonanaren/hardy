const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EngineSchema = Schema({
  type: String,
  cc: String,
  no_of_cylinders: String,
  max_power: String,
  torque: String,
  drive_train: String,
});

module.exports = EngineSchema;
