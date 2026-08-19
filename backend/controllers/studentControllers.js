// Get all students
exports.getAllStudents = async (req, res) => {
  res.json({ message: "Get all students API Working" });
};

// Get one student
exports.getStudentById = async (req, res) => {
  res.json({ message: "Get student by ID API Working" });
};

// Create new student
exports.createStudent = async (req, res) => {
  res.status(201).json({ message: "Student created successfully" });
};

// Update student
exports.updateStudent = async (req, res) => {
  res.json({ message: "Update student API Working" });
};

// Delete student
exports.deleteStudent = async (req, res) => {
  res.json({ message: "Delete student API Working" });
};