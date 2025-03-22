const express = require("express");
const professorController = require("../controllers/professorController");

const router = express.Router();

router
  .route("/")
  .post(professorController.createProfessorAccount)
  .patch(professorController.updateProfessorAccount);
module.exports = router;
