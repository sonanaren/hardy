const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PerformanceSchema = Schema({
  performance_0_to_100_kmph: String,
  max_speed: String,
});

module.exports = PerformanceSchema;
