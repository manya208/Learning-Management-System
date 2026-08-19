const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    studentId: {
      type: String,
      unique: true,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    semester: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
    },
    enrolledCourses: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);