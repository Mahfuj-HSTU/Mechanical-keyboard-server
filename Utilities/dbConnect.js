const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('db connected');
  } catch (e) {
    console.error('Error!! db not connected => ', e.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
