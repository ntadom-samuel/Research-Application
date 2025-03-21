const mongoose = require("mongoose");
const pdfSchema = new mongoose.Schema(
  {
    professorID: {
      type: Number,
      required: true,
      unique: true,
    },

    title: {
      type: String,
      required: true,
      minLength: [5, "Longer title please"],
    },

    description: { type: String },
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const PDF = mongoose.model("Pdf", pdfSchema);

module.exports = PDF;
