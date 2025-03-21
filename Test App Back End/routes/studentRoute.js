const express = require("express");
const Student = require("../models/studentModel.js");

const router = express.Router();

//Function that creates an account for a user
const createAccount = async function (req, res, next) {
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

router.route("/").post(createAccount);
module.exports = router;
