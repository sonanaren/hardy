const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrakingSchema = Schema({
  front_brake_type: String,
  rear_brake_type: String,
  front_disk_drum_size: String,
  rear_disk_drum_size: String,
});

module.exports = BrakingSchema;
