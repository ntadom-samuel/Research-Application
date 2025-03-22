import InformationUnit from "../InformationUnit/InformationUnit";
import styles from "./MainProfile.module.css";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
//This component handles rendering a users data to the UI when they are logged in
let professor_profile = {
  name: "",
  degrees: [], //an array of strings
  researchInterests: [],
  description: "",
  myProfessors: null,
};

function MainProfile({
  profile,
  isStudent,
  firstName,
  setFirstName,
  secondName,
  setSecondName,
  firstMajor,
  setFirstMajor,
  secondMajor,
  setSecondMajor,
  description,
  setDescription,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState(profile); // I am creating new profile states because recycling the old one will trigger the login page's useEffect

  //EventHandlers
  function handleEditing(e) {
    e.preventDefault();
    const val = e.target.textContent;
    console.log(val);
    if (val === "Edit Profile ✏️") setIsEditing(true);
  }

  //TODO:Resolve the shape of the object you'll use for updating a person's profile
  function handleFormSubmission(e) {
    e.preventDefault();
    try {
      if (!firstName || !secondName)
        throw new Error("You must fill in the required fileds");

      if (isStudent) {
        profile.name = `${firstName} ${secondName}`;
        profile.firstMajor = firstMajor;
        profile.secondMajor = secondMajor;
        profile.description = description;
        profile.researchInterests = []; //an array of strings
        profile.myProfessors = null;

        setUpdatedProfile(profile);
      } else {
      }
    } catch (error) {}
  }

  //Effects
  //TODO:Work on search results section. create a put request in API to update a user's profile. Create professor hook for making accounts
  useEffect(() => {
    async function updateProfile() {}
    updateProfile();
  }, [updatedProfile]);

  return (
    <form className={styles.container}>
      <div className={styles.img}>
        <img src="#" alt="user profile picture" />
      </div>
      <div className={styles.flex}>
        <InformationUnit
          unit_name={"First Name"}
          data={firstName}
          isEditing={isEditing}
        />

        <InformationUnit
          unit_name={"Last Name"}
          data={secondName}
          isEditing={isEditing}
        />
      </div>
      <div className={styles.flex}>
        <InformationUnit
          unit_name={"Major"}
          data={firstMajor}
          isEditing={isEditing}
        />
        <InformationUnit
          unit_name={"Second Major"}
          data={secondMajor}
          isEditing={isEditing}
        />
      </div>

      <div className={styles.flex}>
        <InformationUnit unit_name={"Interests"}>
          <textarea
            rows="4"
            cols="50"
            value={"Samuel"}
            disabled={isEditing ? false : true}
          />
        </InformationUnit>
      </div>
      <div className={styles.flex}>
        <InformationUnit unit_name={"Publications"}>
          <textarea
            rows="4"
            cols="50"
            value={description}
            disabled={isEditing ? false : true}
          />
        </InformationUnit>
      </div>
      <div className={styles.edit_button}>
        {!isEditing && (
          <p onClick={handleEditing}>
            Edit Profile <span>✏️</span>
            {/*  */}
          </p>
        )}
        {isEditing && <Button text={"Submit"} />}
      </div>
    </form>
  );
}

export default MainProfile;
