const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

exports.createAdmin = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existing = await Admin.findOne({ email });

    if (existing) {
      return res.status(400).json({
        message: "Admin already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      name,
      email,
      password: hashedPassword,
      role: role || "ADMIN"
    });

    res.status(201).json({
      message: "Admin created successfully",
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};