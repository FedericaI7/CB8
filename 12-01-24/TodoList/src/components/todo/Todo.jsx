import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Input from "../input";
import List from "../list";
import PreList from "../preList";
import image from "/src/assets/undraw_task_list_6x9d.svg";

const Todo = () => {
  const [valueInput, setValueInput] = useState("");
  const [createList, setCreateList] = useState([]);
  const [preList, setPreList] = useState([]);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (valueInput !== "") {
      const newId = Math.floor(Math.random() * 999999) * new Date();
      setCreateList((prev) => [
        ...prev,
        { id: newId, text: valueInput, isChecked: false },
      ]);

      setValueInput("");
    }
  };

  useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((data) => setPreList(data.slice(2, 4)));
  }, []);

  const handleInput = (e) => {
    setValueInput(e.target.value);
  };

  const deleteElement = (id) => {
    const resultList = createList.filter((x) => x.id !== id);
    setCreateList(resultList);
  };

  //list from api
  const deletePreList = (id) => {
    const resultPreList = preList.filter((x) => x._id !== id);
    setPreList(resultPreList);
  };

  const handleChange = (id) => {
    setCreateList((prev) =>
      prev.map((value) => {
        if (value.id === id) {
          return {
            ...value,
            isChecked: !value.isChecked,
          };
        }
        return value;
      })
    );
  };

  return (
    <div className={styles.Todo}>
      <img className={styles.img_Todo} src={image} alt="illustration lists" />
      <Input
        handleSubmit={onHandleSubmit}
        handleInput={handleInput}
        valueInput={valueInput}
      />

      <List
        createList={createList}
        deleteElement={deleteElement}
        handleChange={handleChange}
      />
      <PreList
        preList={preList}
        setPreList={setPreList}
        deleteElement={deletePreList}
        // handleChangePreList={handleChangePreList}
      />
    </div>
  );
};

export default Todo;
