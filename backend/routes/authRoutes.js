const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

const {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  getCurrentUser,
} = require("../controllers/authControllers");

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

// Protected Routes (require JWT token)
router.get("/me", authMiddleware, getCurrentUser);

module.exports = router;