import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import logo from "/public/logoipsum-296.svg";

export default function NavbarInfo() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <img className={styles.img} src={logo} alt="logo" />
      </div>
      <div className={styles.right}>
        <Link className={styles.about} to="/about">
          About
        </Link>
        <Link className={styles.contacts} to="/contacts">
          Contatti
        </Link>
      </div>
    </nav>
  );
}
