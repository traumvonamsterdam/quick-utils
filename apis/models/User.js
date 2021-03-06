const mongoose = require("mongoose");

mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  }
});

// Find user given login data

// userSchema.statics.findByLogin = async function(login) {
//   let user = await this.findOne({
//     username: login
//   });
//   if (!user) {
//     user = await this.findOne({ email: login });
//   }
//   return user;
// };

const User = mongoose.model("User", userSchema);

module.exports = User;
