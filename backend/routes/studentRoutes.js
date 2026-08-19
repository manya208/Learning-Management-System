const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentControllers");

// Get all students
router.get("/", getAllStudents);

// Get one student
router.get("/:id", getStudentById);

// Create student
router.post("/", createStudent);

// Update student
router.put("/:id", updateStudent);

// Delete student
router.delete("/:id", deleteStudent);

module.exports = router;