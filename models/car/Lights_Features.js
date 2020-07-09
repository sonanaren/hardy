const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LightsFeaturesSchema = Schema({
  light_type_led: String,
  front_fog_lamps: String,
  follw_me_home_headlamps: Number,
});

module.exports = LightsFeaturesSchema;
