import "./index.scss";

const List = ({ createList, deleteElement }) => {
  return (
    <div className="List">
      {createList.map((x) => (
        <div className="List__list" key={x.id}>
          <p>{x.text}</p>
          <i
            className="bi bi-x-circle-fill deletebtn"
            onClick={() => deleteElement(x.id)}
          ></i>
        </div>
      ))}
    </div>
  );
};

export default List;
