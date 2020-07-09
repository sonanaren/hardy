const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = Schema({
  street1: String,
  street2: String,
  city: String,
  state: String,
  postal_code: String,
  permanent: String,
});

module.exports = AddressSchema;
