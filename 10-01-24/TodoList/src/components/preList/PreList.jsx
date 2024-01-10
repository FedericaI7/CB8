import "./index.scss";

const PreList = ({ preList, deleteElement }) => {
  return (
    <div className="Prelist">
      {preList &&
        preList.map((x) => (
          <div className="Prelist__list" key={x._id} id={x._id}>
            {/* {x.title}  // for dummyjson */}
            <p>{x.text}</p>
            <i
              className="bi bi-x-circle-fill deletebtn"
              onClick={() => deleteElement(x._id)}
            ></i>
          </div>
        ))}
    </div>
  );
};

export default PreList;
