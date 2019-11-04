const mongoose = require("mongoose");
const User = require("./User");
// import Message from './message';
require("dotenv").config();

const connectDb = async () => {
  const uri = process.env.DATABASE_URL;

  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = { User, connectDb };
