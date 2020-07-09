const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccessSchema = Schema({
  level: String,
  group: String,
});

module.exports = AccessSchema;
