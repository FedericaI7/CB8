import Image from "next/image";
import imgPokedex from "../../../public/pokedexSearch.png";
import styles from "../../styles/Info.module.scss";
import { useState } from "react";

export default function Info() {
  const [isArrowOpen, setIsArrowOpen] = useState(false);

  const onClickArrow = () => {
    setIsArrowOpen((prev) => !prev);
  };

  const arrowCondition = isArrowOpen ? (
    <i className={`${styles.bi} bi-caret-down-fill`}></i>
  ) : (
    <i className={`${styles.bi} bi bi-caret-right`}></i>
  );

  return (
    <div className={styles.Info}>
      <h1 className={styles.title}>Information about the Pokedex</h1>
      <p className={styles.subTitle}>
        The Pokedex is your ultimate guide to all things Pokemon.
      </p>
      <div className={styles.container}>
        <Image
          className={styles.imageInfo}
          src={imgPokedex}
          width="1000"
          height="500"
          alt="pokedex"
        />
        <div className={styles.containerExpanders}>
          <div className={styles.expander}>
            <div onClick={onClickArrow} className={styles.arrowIcon}>
              {arrowCondition} Content
            </div>
            {isArrowOpen && (
              <div className={styles.textInsideExpander}>
                <ul>
                  <li>
                    <a href="">Lorem ipsum 1</a>
                  </li>
                  <li>
                    <a href="">Lorem ipsum 2</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className={styles.expander}>
            <h3>Do you still need assistance?</h3>
            <p>Chat online or request a call if available.</p>
            <button>Contact us</button>
            <hr className={styles.line} />
            <p>Contact hours: Mon-Fri 9:00 - 17:30</p>
          </div>
        </div>
      </div>

      <div className={styles.infoBanner}>
        <p>
          <span className={styles.nota}>Note</span> With just a click in the
          search field and by typing the name of the Pokemon you're curious
          about, you'll be directed to its dedicated page where you can explore
          comprehensive details about that Pokemon.
        </p>
      </div>
      <div className={styles.infoText}>
        <p>
          The Pokedex serves as your ultimate companion for discovering
          everything about Pokemon. With a simple click in the search field and
          by typing the name of the Pokemon you're interested in, you'll swiftly
          navigate to its dedicated page. There, you can delve into essential
          details such as its type, weight, height, HP, and scores for defense,
          attack, speed, and special attack.
        </p>
        <p>
          Although the Pokedex may not contain an exhaustive list of details, it
          provides crucial information to satisfy your curiosity about each
          Pokemon in the expansive world of Pokemon. Whether you're an
          experienced trainer or just beginning your journey, the Pokedex is an
          indispensable tool for uncovering the mysteries of the Pokemon
          universe. Begin your exploration now and embark on an adventure unlike
          any other!
        </p>
      </div>
    </div>
  );
}
