const mongoose = require("mongoose");
const professorSchema = new mongoose.Schema(
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
    degrees: {
      type: [String],
    },
    institutions: {
      type: [String],
    },
    researchInterests: {
      type: [String],
      // required: [true, "you must specify your interests"],
    },
    researchDescription: { type: String },
    myColleagues: { type: String, default: null }, //Change type to array of professors ID
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Professor = mongoose.model("Professor", professorSchema);

module.exports = Professor;
