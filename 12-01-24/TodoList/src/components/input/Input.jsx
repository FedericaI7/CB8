import styles from "./index.module.scss";

const Input = ({ handleInput, valueInput, handleSubmit }) => {
  return (
    <form className={styles.Input} onSubmit={handleSubmit}>
      <input
        className={styles.input_text}
        type="text"
        onChange={handleInput}
        value={valueInput}
      />
      <button className={styles.buttonClick} type="submit">
        <i className="bi bi-patch-plus"></i>
      </button>
    </form>
  );
};

export default Input;
