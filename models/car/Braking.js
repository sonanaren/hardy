const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrakingSchema = Schema({
  front_brake_type: String,
  rear_brake_type: String,
});

module.exports = BrakingSchema;
