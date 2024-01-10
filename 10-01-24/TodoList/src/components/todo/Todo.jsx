import { useEffect, useState } from "react";
import "./index.scss";
import Input from "../input";
import List from "../list";
import PreList from "../preList";
import image from "/src/assets/undraw_task_list_6x9d.svg";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Todo = () => {
  const [valueInput, setValueInput] = useState("");
  const [createList, setCreateList] = useState(getLocalItems());
  const [preList, setPreList] = useState([]);

  //local Storage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(createList));
  }, [createList]);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (valueInput !== "") {
      setCreateList((prev) => [
        ...prev,
        { id: prev.length + 1, text: valueInput },
      ]);

      setValueInput("");
    }
  };

  useEffect(() => {
    // fetch("https://dummyjson.com/posts")
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((res) => res.json())
      .then((data) => setPreList(data.slice(2, 4)));
    // .then((data) => setPreList(data.posts.slice(1, 5)));
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

  return (
    <div className="Todo">
      <img src={image} alt="illustration lists" />
      <Input
        handleSubmit={onHandleSubmit}
        handleInput={handleInput}
        valueInput={valueInput}
      />
      <List createList={createList} deleteElement={deleteElement} />
      <PreList preList={preList} deleteElement={deletePreList} />
    </div>
  );
};

export default Todo;
