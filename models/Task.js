const mongoose = require("mongoose");

mongoose.set("useCreateIndex", true);

const taskSchema = new mongoose.Schema({
  taskName: String,
  date: String
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

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
