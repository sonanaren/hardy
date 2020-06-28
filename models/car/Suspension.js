const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SuspensionSchema = Schema({
    front_suspension: String,
    rear_suspension: String,
});

module.exports = SuspensionSchema;