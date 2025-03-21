import styles from "./InformationUnit.module.css";
function InformationUnit({ unit_name, data, children, isEditing }) {
  return (
    <div className={styles.container}>
      <p>{unit_name}</p>
      {data && <input value={data} disabled={isEditing ? false : true} />}
      {!data && children}
    </div>
  );
}

export default InformationUnit;
