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
    const newStudent = await Student.create(req.params.id, req.body, {
      new: true,
      runValidators: true, //this makes validators check documents before they are updated.
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
