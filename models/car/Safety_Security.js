const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SafetySecurityFeaturesSchema = Schema({
    airbags: String,
    passenger_airbags: String,
    abs: Number,
    electronic_brakeforce_distribution: Number,
    engine_immobilizer: Number,
    central_locking: Number,
    child_safety_lock: Number,
    power_door_lock: Number,
    turn_indicators_on_orvm: Number,
    headlamp_beam_adjuster: Number,
    idle_alert: Number,
    sos_emergency_call_function: String,
    speed_alert: Number,
});

module.exports = SafetySecurityFeaturesSchema;