import { useEffect, useState } from "react";
import Login from "../components/Login/Login";
import UserInputFields from "../components/UserInputFields/UserInputFields";
import Selector from "../components/Selector/Selector";
import Description from "../components/Description";
import { Button } from "@chakra-ui/react";
import Navigation from "../components/Navigation/Navigation";
import MainProfile from "../components/MainProfile/MainProfile";
import SearchResultsTab from "../components/SearchResultsTab/SearchResultsTab";
import DegreeFields from "../components/DegreeFields/DegreeFields";
//TODO: users will be able to select multiple filters in the search section
const fields = ["Computer Science", "Economics", "Physics", "Math"]; //for now, these are the possible fields a user can choose from
const filter = ["Region", "Institution", "Professor's Name"];

//Variables
let student_profile = {};

// {
//     name: {
//       type: String,
//       required: true,
//       unique: true,
//       maxLength: [
//         41,
//         "Your first and last names cannot be more than 20 characters each.",
//       ],
//       minLength: [
//         5,
//         "Your first and last names cannot be less than 2 characters each.",
//       ],
//     },
//     degrees: {
//       type: [String],
//     },
//     institutions: {
//       type: [String],
//     },
//     researchInterests: {
//       type: [String],
//       // required: [true, "you must specify your interests"],
//     },
//     researchDescription: { type: String },
//     myColleagues: { type: String, default: null }, //Change type to array of professors ID
//   },
//   {
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true },
//   }

let professor_profile = {};

function App({ Component, pageProps }) {
  //States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isStudent, setIsStudent] = useState(true); //change this back to false

  const [firstName, setFirstName] = useState(""); //first name
  const [lastName, setLastName] = useState(""); //last name
  const [firstMajor, setFirstMajor] = useState(""); //first Major
  const [secondMajor, setSecondMajor] = useState(""); //last Second Major
  const [description, setDescription] = useState("");
  const [newProfile, setNewProfile] = useState({});

  //Event handlers
  function handleFormSubmission(e) {
    e.preventDefault();
    try {
      if (!firstName || !lastName)
        throw new Error("You must fill in the required fileds");

      if (isStudent) {
        student_profile.name = `${firstName} ${lastName}`;
        student_profile.firstMajor = firstMajor;
        student_profile.secondMajor = secondMajor;
        student_profile.description = description;
        student_profile.researchInterests = []; //an array of strings
        student_profile.myProfessors = null;

        setNewProfile((new_profile) => (new_profile = student_profile));
      } else {
        professor_profile.name = `${firstName} ${lastName}`;
      }

      //setIsLoggedIn(true);
    } catch (error) {
      console.log(error.message);
    }
  }

  //Effects
  useEffect(
    function () {
      async function createStudent() {
        if (Object.keys(student_profile).length === 0) return; //ensures no request is sent to our API until a students fills their profile

        try {
          const res = await fetch("http://localhost:2700/api/student", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(student_profile), //I have o use student profile because new profile lags behind. Stale state
          });

          if (!res.ok)
            throw new Error("Something went wrong. Please try again.");

          const data = await res.json();

          if (data.status === "fail")
            throw new Error("Something went wrong with our API.");

          setIsLoggedIn(true);
        } catch (error) {
          console.log(error.message);
        }
      }
      createStudent();
    },
    [newProfile]
  );

  return (
    <>
      <Navigation
        isLoggedIn={isLoggedIn}
        isStudent={isStudent}
        setIsStudent={setIsStudent}
      />

      <main className={`app`}>
        {/* TODO:Create component to select if they are a student or professor */}
        {/* TODO:Change isLoggedIn to not Loggedin */}
        {isLoggedIn && (
          <Login onSubmit={handleFormSubmission}>
            {" "}
            <UserInputFields
              firstText={firstName}
              setFirstText={setFirstName}
              secondText={lastName}
              setSecondText={setLastName}
              options={["First Name", "Last Name"]}
            />
            {/* STUDENT */}
            {isStudent && (
              <>
                <UserInputFields
                  firstText={firstMajor}
                  setFirstText={setFirstMajor}
                  secondText={secondMajor}
                  setSecondText={setSecondMajor}
                  options={["Major", "Second Major"]}
                />
                <Selector text="Select Interest" array={fields} />
                {/* Modify the above selector into that fancy selection implementation that allows you select multiple items, if there's time */}
                <Selector text="Filter by" array={filter} />
              </>
            )}
            {/* PROFESSOR 
            //TODO: look into switching between who is loggin in
            */}
            {!isStudent && (
              <>
                <DegreeFields />
              </>
            )}
            <Description
              description={description}
              setDescription={setDescription}
            />
            <Button text="sign up" />
          </Login>
        )}
        {!isLoggedIn && (
          <>
            <MainProfile
              profile={student_profile}
              isStudent={isStudent}
              firstName={firstName}
              setFirstName={setFirstName}
              secondName={lastName}
              setSecondName={setLastName}
              firstMajor={firstMajor}
              setFirstMajor={setFirstMajor}
              secondMajor={secondMajor}
              setSecondMajor={setSecondMajor}
              description={description}
              setDescription={setDescription}
            />
            <SearchResultsTab />
          </>
        )}
      </main>
      </>
  );
}

export default App;
