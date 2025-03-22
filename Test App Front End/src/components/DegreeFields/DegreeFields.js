import { useState } from "react";
import styles from "./DegreeFields.module.css";
import { MdAddCircle } from "react-icons/md";
import { FaMinusCircle } from "react-icons/fa";
function DegreeFields({ education, setEducation }) {
  //TODO:consider usning dom manipulation to create a list of nodes for the react listsing
  //States
  const [numberOfEntries, setNumberOfEntries] = useState(1);

  //Event Handlers
  const handleAddClick = function () {
    setNumberOfEntries((val) => val + 1);
  };
  const handleMinusClick = function () {
    setNumberOfEntries((val) => val - 1);
    setEducation((education) => education.pop());
  };

  const callbackGeneratorStoreDegree = (education, num) =>
    function (e) {
      e.preventDefault();
      if (!education[num]) {
        setEducation((education) => {
          education[num] = {};
        });
      }
      setEducation((education) => {
        if (education) education.degree = e.target.value;
      });

      console.log(education);
    };

  const callbackGeneratorStoreUniversity = (education, num) =>
    function (e) {
      e.preventDefault();
      if (!education[num]) {
        setEducation((education) => {
          education[num] = {};
        });
      }
      setEducation((education) => {
        if (education) education.institution = e.target.value;
      });
    };

  return (
    <div className={styles.mainContainer}>
      {Array.from({ length: numberOfEntries }, (_, i) => i + 1).map((num) => (
        <div key={num} className={styles.fieldsContainer}>
          <input
            onChange={callbackGeneratorStoreDegree(education, num)}
            value={education[num]?.degree}
          />
          <input
            onChange={callbackGeneratorStoreUniversity(education, num)}
            value={education[num]?.institution}
            placeholder="College Name: e.g Calvin College"
          />
        </div>
      ))}

      <div className={numberOfEntries === 1 ? styles.setIcon : styles.setIcons}>
        {numberOfEntries > 1 && (
          <FaMinusCircle
            onClick={handleMinusClick}
            style={{ color: "#D1C6F4", fontSize: "4.2rem" }}
          />
        )}
        <MdAddCircle
          onClick={handleAddClick}
          style={{ color: "#D1C6F4", fontSize: "4.2rem" }}
        />
      </div>
    </div>
  );
}

export default DegreeFields;
