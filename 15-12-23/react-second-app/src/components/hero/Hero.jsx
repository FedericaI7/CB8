import "./index.css";

const Hero = ({ title, text, buttonText, img, altImg }) => {
  return (
    <main>
      <div className="Hero">
        <div className="Hero__text">
          <h1>{title}</h1>
          <p>{text}</p>
          <button>{buttonText}</button>
        </div>
        <div className="Hero__img">
          <img src={img} alt={altImg} />
        </div>
      </div>
    </main>
  );
};

export default Hero;
