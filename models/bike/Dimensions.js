const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DimensionsSchema = Schema({
    kerb_weight: String,
    length: String,
    width: String,
    height: String,
    wheelbase: String,
    ground_clearance: String,
    seat_height: String,
});

module.exports = DimensionsSchema;