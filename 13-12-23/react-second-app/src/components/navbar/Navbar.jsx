import logo from "/public/logoipsum-274.svg";
import "./index.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={logo} alt="logo" />
      <ul className="links__Navbar">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
