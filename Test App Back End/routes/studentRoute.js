const express = require("express");
const studentController = require("../controllers/studentController");

const router = express.Router();


//Function that creates an account for a user

router
  .route("/")
  .post(studentController.createStudentAccount)
  .get(studentController.getAllStudents);

  router.route("/:id").patch(studentController.updateStudentAccount);

module.exports = router;
