const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SuspensionSchema = Schema({
    chassis_type: String,
    front_suspension: String,
    rear_suspension: String,
});

module.exports = SuspensionSchema;