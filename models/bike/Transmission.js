const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransmissionSchema = Schema({
  no_of_gears: String,
  clutch: String,
});

module.exports = TransmissionSchema;
