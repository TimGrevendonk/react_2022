function InputForm({ submitItem, caption }) {
  return (
    <div className="highscores">
      <form onSubmit={submitItem}>
        <input placeholder="enter your name" />
        <button type="submit">{caption}</button>
      </form>
    </div>
  );
}

export default InputForm;
