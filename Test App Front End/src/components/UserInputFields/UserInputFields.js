import { useState } from "react";
import styles from "./UserInputFields.module.css";

function UserInputFields({
  options,
  firstText,
  setFirstText,
  secondText,
  setSecondText,
}) {
  return (
    <div className={styles.container}>
      {/* Modify the below to use a map to create elements */}
      <input
        type="text"
        value={firstText}
        placeholder={options[0]}
        onChange={(e) => {
          e.preventDefault();
          setFirstText(e.target.value);
        }}
      />
      <input
        type="text"
        value={secondText}
        placeholder={options[1]}
        onChange={(e) => {
          e.preventDefault();
          setSecondText(e.target.value);
        }}
      />
    </div>
  );
}

export default UserInputFields;
