const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KeyFeaturesSchema = Schema({
  assist_slipper_clutch: Number,
  usb_charging: Number,
  variables_valves_actuation: Number,
  super_wide_tyre: Number,
  dual_channel_abs: Number,
});

module.exports = KeyFeaturesSchema;
