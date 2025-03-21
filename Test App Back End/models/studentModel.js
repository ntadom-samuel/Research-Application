const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      maxLength: [
        41,
        "Your first and last names cannot be more than 20 characters each.",
      ],
      minLength: [
        5,
        "Your first and last names cannot be less than 2 characters each.",
      ],
    },
    firstMajor: { type: String },
    secondMajor: { type: String },
    researchInterests: {
      type: [String],
      // required: [true, "you must specify your interests"],
    },
    description: { type: String },
    myProfessors: { type: String, default: null }, //Change type to array of professors
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
