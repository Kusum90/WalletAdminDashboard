const Transaction = require("../models/Transaction");

exports.getAllTransactions = async (req, res) => {
  const { status, accountNumber } = req.query;

  let filter = {};

  if (status) filter.status = status;
  if (accountNumber) filter.accountNumber = accountNumber;

  const transactions = await Transaction.find(filter).populate("userId");

  res.json({
    count: transactions.length,
    transactions
  });
};