const User = require("../models/User");
const Transaction = require("../models/Transaction");

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.getUserDetails = async (req, res) => {
  const user = await User.findById(req.params.id);

  const transactions = await Transaction.find({
    userId: req.params.id
  });

  res.json({
    user,
    transactions
  });
};