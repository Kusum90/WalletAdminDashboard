const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwt");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = generateToken(admin);

  res.json({
    token,
    admin: {
      id: admin._id,
      role: admin.role,
      email: admin.email
    }
  });
};