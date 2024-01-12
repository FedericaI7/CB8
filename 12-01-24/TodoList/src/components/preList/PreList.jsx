import styles from "./index.module.scss";

const PreList = ({ preList, setPreList, deleteElement }) => {
  const handleChange = (id) => {
    setPreList((prevList) =>
      prevList.map((item) =>
        item._id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <div className={styles.Prelist}>
      {preList &&
        preList.map((x) => (
          <div
            className={styles.listMap}
            onClick={() => handleChange(x._id)}
            key={x._id}
          >
            <p>{x.text}</p>
            <div className={styles.flex}>
              <input
                className={styles.checkbox}
                type="checkbox"
                checked={x.isChecked !== undefined ? x.isChecked : false}
              />
              <i
                className={`bi-x-circle-fill ${styles.deletebtn}`}
                onClick={() => deleteElement(x._id)}
              ></i>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PreList;
