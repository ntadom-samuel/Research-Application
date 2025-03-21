import style from "./DegreeFields.module.css";
function DegreeFields() {
  //TODO:consider usning dom manipulation to create a list of nodes for the react listsing
  return (
    <div>
      <div className={style.fieldsContainer}>
        <input value={"Sam"} />
        <input value={"Ed"} />
      </div>
      <span>+</span>
    </div>
  );
}

export default DegreeFields;
