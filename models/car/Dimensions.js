const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DimensionsSchema = Schema({
    length: String,
    width: String,
    height: String,
    wheelbase: String,
    ground_clearance: String,
    boot_space: String,
    kerb_weight: String,
    gross_weight: String,
    front_track: String,
    rear_track: String,
    minimum_turning_radius: String,
    no_of_doors: String,
    seating_capacity: String,
});

module.exports = DimensionsSchema;