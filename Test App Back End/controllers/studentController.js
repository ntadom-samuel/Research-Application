const Student = require("../models/studentModel.js");

exports.createStudentAccount = async function (req, res, next) {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        student: newStudent,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      data: {
        message: error.message,
      },
    });
  }
};

exports.updateStudentAccount = async function (req, res, next) {
  try {
    console.log("PATCH request received for ID:", req.params.id);
    console.log("Request body:", req.body);

    const newStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true, // Run validators on update
      }
    );
    
    console.log("Updated student object:", newStudent);

    res.status(200).json({
      status: "success",
      data: {
        student: newStudent,
      },
    });
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(404).json({
      status: "fail",
      data: {
        message: error.message,
      },
    });
  }
};


exports.getAllStudents = async function (req, res, next) {
  try {
    const students = await Student.find();
    res.status(200).json({
      status: "success",
      results: students.length,
      data: {
        students,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      data: {
        message: error.message,
      },
    });
  }
};
