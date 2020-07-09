const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = Schema({
  phone: String,
  mobile: String,
  email: String,
  rear_tyre_size: String,
});

module.exports = ContactSchema;
