import { useState } from "react";
import styles from "./index.module.scss";

import image from "/public//DrawKit-Vector-Illustration-ecommerce-01.svg";

export default function ContactsInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    textarea: "",
  });

  // const handleInput = (e) => {
  //   setFormData(e.target.value);
  // };

  const handleInput = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className={styles.contactInfo}>
      <form className={styles.form}>
        <input
          className={styles.name}
          onChange={handleInput}
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name}
        />
        <input
          className={styles.email}
          onChange={handleInput}
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
        />
        <textarea
          className={styles.textarea}
          onChange={handleInput}
          name="textarea"
          id=""
          cols="50"
          rows="10"
          placeholder="Share your thoughts"
          value={formData.textarea}
        ></textarea>
        <input className={styles.submit} type="submit" value="Send" />
      </form>
      <div>
        <img className={styles.image} src={image} alt="illustration" />
      </div>
    </div>
  );
}
