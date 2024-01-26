import styles from "./index.module.scss";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className={styles.Container}>
      <nav className={styles.Layout}>
        <ul className={styles.containerList}>
          <li>
            <Link href="/">Homepage</Link>
          </li>
          <li>
            <Link href="/auguri">Auguri</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
