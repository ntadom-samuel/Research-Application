import { useEffect, useState } from "react";
import Login from "../../components/Login/Login";
import UserInputFields from "../../components/UserInputFields/UserInputFields";
import Selector from "../../components/Selector/Selector";
import Description from "../../components/Description/Description";
// import { Button } from "@chakra-ui/react";
import Button from "../../components/Button/Button";

import Navigation from "../../components/Navigation/Navigation";
import MainProfile from "../../components/MainProfile/MainProfile";
import SearchResultsTab from "../../components/SearchResultsTab/SearchResultsTab";
import DegreeFields from "../../components/DegreeFields/DegreeFields";
import { Provider } from "../../components/ui/provider";
//TODO: users will be able to select multiple filters in the search section

const fields = ["Computer Science", "Economics", "Physics", "Math"]; //for now, these are the possible fields a user can choose from
const filter = ["Region", "Institution", "Professor's Name"];

//Variables
let student_profile = {};
let professor_profile = {};

function MainPage() {
  //States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isStudent, setIsStudent] = useState(true); //change this back to false

  //General
  const [firstName, setFirstName] = useState(""); //first name
  const [lastName, setLastName] = useState(""); //last name
  const [description, setDescription] = useState("");

  //Student
  const [firstMajor, setFirstMajor] = useState(""); //first Major
  const [secondMajor, setSecondMajor] = useState(""); //last Second Major
  const [studentProfile, setStudentProfile] = useState({});

  //Professor
  const [education, setEducation] = useState([]);
  const [professorProfile, setProfessorProfile] = useState({});

  //TODO: create field active id to store users id each time they login

  //Event handlers
  function handleFormSubmission(e) {
    e.preventDefault();
    try {
      if (!firstName || !lastName)
        throw new Error("You must fill in the required fileds");

      if (isStudent) {
        student_profile.name = `${firstName} ${lastName}`;
        student_profile.firstName = firstName;
        student_profile.secondName = lastName;
        student_profile.firstMajor = firstMajor;
        student_profile.secondMajor = secondMajor;
        student_profile.description = description;
        student_profile.researchInterests = []; //an array of strings
        student_profile.myProfessors = null;
        student_profile.picture = "";
        setStudentProfile(student_profile);
      } else {
        professor_profile.name = `${firstName} ${lastName}`;
        professor_profile.firstName = firstName;
        professor_profile.secondName = lastName;
        //TODO: make this work with the education model
        professor_profile.education = [
          {
            institution: "Calvin University",
            degree: "BSC. Computer Science",
          },
        ];
        professor_profile.picture = "";
        professor_profile.description = description;
        setProfessorProfile(professor_profile);
      }

      // setIsLoggedIn(true);
    } catch (error) {
      console.log(error.message);
    }
  }

  //Effects
  //TODO: store a students ID and use it in another effect to request to update the user's information
  useEffect(
    function () {
      async function createStudent() {
        if (Object.keys(student_profile).length === 0) return; //ensures no request is sent to our API until a students fills their profile

        console.log(student_profile);
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
    [studentProfile]
  );

  useEffect(
    function () {
      async function createProfessor() {
        if (Object.keys(professor_profile).length === 0) return;

        try {
          console.log(professor_profile);
          const res = await fetch("http://localhost:2700/api/professor", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(professor_profile), //I have o use student profile because new profile lags behind. Stale state
          });

          if (!res.ok)
            throw new Error("Something went wrong. Please try again.");

          const data = await res.json();
          console.log(data.data);

          if (data.status === "fail")
            throw new Error("Something went wrong with our API.");

          setIsLoggedIn(true);
        } catch (error) {
          console.log(error.message);
        }
      }
      createProfessor();
    },
    [professorProfile]
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
        {!isLoggedIn && (
          <Login onSubmit={handleFormSubmission}>
            {/* STUDENT */}
            {isStudent && (
              <>
                <UserInputFields
                  firstText={firstName}
                  setFirstText={setFirstName}
                  secondText={lastName}
                  setSecondText={setLastName}
                  options={["First Name", "Last Name"]}
                />
                <UserInputFields
                  firstText={firstMajor}
                  setFirstText={setFirstMajor}
                  secondText={secondMajor}
                  setSecondText={setSecondMajor}
                  options={["Major", "Second Major"]}
                />
                <Selector text="Pick a field" array={fields} />
                {/* Modify the above selector into that fancy selection implementation that allows you select multiple items, if there's time */}
                {/* <Selector text="Filter by" array={filter} /> */}
                <Description
                  description={description}
                  setDescription={setDescription}
                />
              </>
            )}
            {/* PROFESSOR
             */}
            {!isStudent && (
              <>
                <UserInputFields
                  firstText={firstName}
                  setFirstText={setFirstName}
                  secondText={lastName}
                  setSecondText={setLastName}
                  options={["First Name", "Last Name"]}
                />
                <DegreeFields
                  education={education}
                  setEducation={setEducation}
                />
                <Description
                  description={description}
                  setDescription={setDescription}
                />
              </>
            )}

            <div
              style={{
                display: "Flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Button text="Search" />
            </div>
          </Login>
        )}
        {isLoggedIn && (
          <>
            <MainProfile
              profile={studentProfile}
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

export default MainPage;
