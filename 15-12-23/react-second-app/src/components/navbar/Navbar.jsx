import logo from "/public/logoipsum-274.svg";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
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
    </nav>
  );
};

export default Navbar;
