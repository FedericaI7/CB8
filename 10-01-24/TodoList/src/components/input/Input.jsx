import "./index.scss";

const Input = ({ handleInput, valueInput, handleSubmit }) => {
  return (
    <form className="Input" onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput} value={valueInput} />
      <button type="submit">
        <i className="bi bi-patch-plus"></i>
      </button>
    </form>
  );
};

export default Input;
