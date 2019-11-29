const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  const uri = process.env.DATABASE_URL;
  const db = mongoose.connection;

  db.on("error", function(error) {
    console.error("MongoDB error: " + error);
    mongoose.disconnect();
  });

  db.on("disconnected", () => {
    console.log("MongoDB disconnected!");
    mongoose.connect(uri, { server: { auto_reconnect: true } });
  });

  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    server: { auto_reconnect: true }
  });
};

module.exports = connectDb;
