const Student = require("../models/Student");

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().populate(
      "userId",
      "name email role"
    );

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Get one student
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate(
      "userId",
      "name email role"
    );

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Create student
exports.createStudent = async (req, res) => {
  try {
    const {
      userId,
      studentId,
      department,
      semester,
      phone,
    } = req.body;

    if (!userId || !studentId || !department || !semester) {
      return res.status(400).json({
        message: "Required student fields are missing",
      });
    }

    const existingStudent = await Student.findOne({ studentId });

    if (existingStudent) {
      return res.status(409).json({
        message: "Student ID already exists",
      });
    }

    const student = await Student.create({
      userId,
      studentId,
      department,
      semester,
      phone,
    });

    res.status(201).json({
      message: "Student created successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Update student
exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({
      message: "Student updated successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Delete student
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.status(200).json({
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};