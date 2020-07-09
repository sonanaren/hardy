const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VariantSchema = Schema({
  code: String,
});

module.exports = VariantSchema;
