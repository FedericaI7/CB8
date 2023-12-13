import "./index.css";

const Gallery = ({ dataImg }) => {
  return (
    <div className="Gallery">
      {dataImg.map((item) => (
        <img key={item.id} src={item.image} alt={`image${item.id}`} />
      ))}
    </div>
  );
};

export default Gallery;
