// db.js

const mongoose = require('mongoose');
//const config = require('config');
//const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb://127.0.0.1:27017/hardy',
      {
        useNewUrlParser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;