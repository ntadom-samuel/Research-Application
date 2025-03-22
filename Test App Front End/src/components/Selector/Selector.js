import { useState } from "react";
import styles from "./Selector.module.css";

function Selector({ text, array }) {
  //States
  const [selectedValue, setSelectedValue] = useState(array[0]);

  //Event handlers
  function handleSelect(e) {
    //sets our selector's value
    setSelectedValue(e.target.value);
  }

  return (
    <div className={styles.container}>
      <p>{text}</p>
      <select
        className={styles.entry}
        value={selectedValue}
        onChange={handleSelect}
      >
        {array.map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Selector;
