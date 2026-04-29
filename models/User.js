const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  walletBalance: Number
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);