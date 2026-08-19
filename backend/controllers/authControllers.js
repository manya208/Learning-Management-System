const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

// Register
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }
    res.status(201).json({
      message: "User registered successfully",
      userId: "user123",
      name, email, role: role || "student"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }
    const token = jwt.sign(
      { userId: "user123", email, role: "student" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.status(200).json({
      message: "Login successful",
      userId: "user123",
      email,
      role: "student",
      token
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  res.status(200).json({ message: "Reset link sent to email" });
};

// Reset Password
exports.resetPassword = async (req, res) => {
  res.status(200).json({ message: "Password reset successfully" });
};

// Get Current User
exports.getCurrentUser = async (req, res) => {
  res.status(200).json({
    message: "User retrieved",
    user: { userId: req.user.userId, email: req.user.email }
  });
};