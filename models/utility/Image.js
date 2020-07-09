const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = Schema({
  image: {
    type: String,
  },
});

module.exports = ImageSchema;
