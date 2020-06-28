const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StandardFeaturesSchema = Schema({
    speedometer: String,
    technometer: String,
    gear_indicator: Number,
    fuel_warning_indicator: Number,
    fuel_gauge: Number,
    low_oil_indicator: Number,
    low_battery_indicator: Number,
    pillion_seat: Number,
    pillion_grabrail: Number,
    engine_kill_switch: Number,
    clock: Number,
    tripmeter_type: String,
    tripmeter_count: Number,
    pass_light: Number,
});

module.exports = StandardFeaturesSchema;