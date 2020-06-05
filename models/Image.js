const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    bike: {
        type: String
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('Image', ImageSchema);