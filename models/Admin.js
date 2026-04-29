const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["ADMIN", "SUPER_ADMIN"], default: "ADMIN" }
}, { timestamps: true });

module.exports = mongoose.model("Admin", adminSchema);