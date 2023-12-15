import "./index.css";
import { useState } from "react";
import dataGallery from "/src/dataGallery.json";

const Carousel = ({ pic }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((pic) => (pic === dataGallery.length - 1 ? 0 : pic + 1));
  };

  const prevSlide = () => {
    setSlide((pic) => (pic === dataGallery.length - 1 ? 0 : pic + 1));
  };

  return (
    <section className="Carousel">
      <i onClick={prevSlide} className="bi bi-arrow-left-short"></i>
      {pic.map((x, index) => (
        <div className="section">
          <img
            key={x.id}
            src={x.image}
            alt={x.id + "image"}
            className={slide === index ? "slide" : "slide slide-hidden"}
          />
        </div>
      ))}
      <i onClick={nextSlide} className="bi bi-arrow-right-short"></i>
    </section>
  );
};

export default Carousel;
