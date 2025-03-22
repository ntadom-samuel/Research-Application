const express = require("express"); //importing the express module
const studentRouter = require("./routes/studentRoute");
const professorRouter = require("./routes/professorRoute");
const cors = require("cors");

const app = express(); //creating object for performing requests
app.use(express.json()); //allows us to access req.body
// app.use(cors());// allow all origins (use with caution in production)
// This allows me send requests to my backend

// app.use(
//   cors({
//     origin: "http://localhost:3000", // Replace with your frontend's origin
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

//Hook for creating a students profile
app.use("/api/student", studentRouter);

//Hook for creating a professors profile
app.use("/api/professor", professorRouter);

module.exports = app;
