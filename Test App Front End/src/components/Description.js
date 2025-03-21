function Description({ description, setDescription }) {
  function handleInput(e) {
    setDescription(e.target.value);
  }
  return (
    <div>
      <p>Describe your interest</p>
      <textarea rows="4" cols="50" onChange={handleInput}></textarea>
    </div>
  );
}

export default Description;
