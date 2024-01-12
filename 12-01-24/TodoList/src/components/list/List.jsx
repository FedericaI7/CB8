import styles from "./index.module.scss";

const List = ({ createList, deleteElement, handleChange }) => {
  return (
    <div className={styles.List}>
      {createList.map((x) => (
        <div
          className={styles.listMap}
          onClick={() => handleChange(x.id)}
          key={x.id}
        >
          <p>{x.text}</p>

          <div className={styles.flex}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={x.isChecked}
              onChange={() => {}}
            />
            <i
              className={`bi-x-circle-fill ${styles.deletebtn}`}
              onClick={() => deleteElement(x.id)}
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
