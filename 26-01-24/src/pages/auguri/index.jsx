import styles from "../../styles/Auguri.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import Confetti from "react-confetti";

export default function Auguri() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, []);

  const onHandleColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className={styles.Auguri}>
      <Confetti width={width} height={height} colors={[color]} />
      <div className={styles.containerInput}>
        <input
          className={styles.inputConfetti}
          type="text"
          value={color}
          onChange={onHandleColor}
          placeholder="Choose your color"
        />
      </div>
    </div>
  );
}
