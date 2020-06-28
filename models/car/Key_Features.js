const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KeyFeaturesSchema = Schema({
    sos_emergency_call_function: Number,
    stolen_vehicle_notification: Number,
    remote_engine_start_stop: Number,
    remote_horn_light: Number,
    al_voice_command: Number,
});

module.exports = KeyFeaturesSchema;