const Professor = require("../models/professorModel");

//Function that creates an account for a professor
exports.createProfessorAccount = async function (req, res, next) {
  try {
    const newProfessor = await Professor.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        student: newProfessor,
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

//Function that creates accounts for professors
exports.updateProfessorAccount = async function (req, res, next) {
  try {
    const newProfessor = await Professor.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true, //this makes validators check documents before they are updated.
      }
    );
  } catch (error) {
    res.status(404).json({
      status: "fail",
      data: {
        message: error.message,
      },
    });
  }
};

//Function that gets all the professors accounts
exports.getAllProfessors = async function (req, res, next) {
  try {
    const professors = await Professor.find();
    res.status(200).json({
      status: "success",
      results: professors.length,
      data: {
        professors,
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
