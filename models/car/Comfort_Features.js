const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComfortFeaturesSchema = Schema({
  air_conditioner_manual: String,
  heater: String,
  steering_adjustment_tilt: Number,
  steering_mounted_audio: Number,
  paddle_shift: Number,
  cruise_ontrol: Number,
});

module.exports = ComfortFeaturesSchema;
