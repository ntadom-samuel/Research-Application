import styles from "./Description.module.css";

function Description({ description, setDescription }) {
  function handleInput(e) {
    setDescription(e.target.value);
  }
  return (
    <div className={styles.container}>
      <p>Describe your interest</p>
      <textarea
        className={styles.entry}
        rows="4"
        cols="50"
        onChange={handleInput}
      ></textarea>
    </div>
  );
}

export default Description;
