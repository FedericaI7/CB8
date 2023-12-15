import "./index.css";
import logo from "/public/logoipsum-274.svg";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Company__name box">
        <img src={logo} alt="logo" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          numquam quidem placeat.
        </p>
      </div>
      <div className="Company__Products box">
        <h3>PRODUCTS</h3>
        <p>Flowers</p>
        <p>Decorations</p>
        <p>Gifts</p>
      </div>
      <div className="Company__links box">
        <h3>LINKS</h3>
        <a href="#">Account</a>
        <a href="#">Become an Affiliate</a>
        <a href="#">Shipping Rates</a>
        <a href="#">Help</a>
      </div>
      <div className="Company__contact box">
        <h3>CONTACT</h3>
        <p>New York, NY 10012 US</p>
        <p>Info@example.com</p>
        <p>+01 23456789</p>
      </div>
    </footer>
  );
};

export default Footer;
