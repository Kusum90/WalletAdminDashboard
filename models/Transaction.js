const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: Number,
  type: String,
  status: { type: String, enum: ["SUCCESS", "FAILED"] },
  failureReason: String,
  accountNumber: String
}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);