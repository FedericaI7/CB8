import styles from "./index.module.scss";
import image from "../../images/books.jpg";

const Copyright = () => {
  return (
    <div className={styles.Copyright}>
      <div className={styles.wrapper}>
        <img
          className={styles.portrait}
          src={image}
          alt="illustration Mrs.Woolf"
        />
        <div className={styles.text}>
          <h1 className={styles.title_h1}>Copyright and Application Rules</h1>
          <h3 className={styles.title_h3}>Terms and Conditions of Use</h3>

          <section>
            <h4 className={styles.title_h4}>Copyright Notice</h4>
            <p className={styles.prg}>
              This amazing application, named "BookArcanum," is an original work
              protected by copyright © 2024 BookArcanum Ltd. All rights
              reserved. Unauthorized use of the content, design, and any unique
              elements of BookArcanum is prohibited.
            </p>
          </section>

          <section>
            <h4 className={styles.title_h4}>Terms and Conditions of Use</h4>
            <ul>
              <li className={styles.prg}>
                Welcome to BookArcanum! By using our application, you agree to
                abide by the following terms and conditions.
              </li>
              <li className={styles.prg}>
                - Users are responsible for the content they share.
              </li>
              <li className={styles.prg}>
                - Access and use of the application are permitted for legitimate
                purposes only.
              </li>
              <li className={styles.prg}>
                - Do not violate the rights of third parties or applicable laws.
              </li>
            </ul>
          </section>

          <section>
            <h4 className={styles.title_h4}>Limitation of Liability</h4>

            <p className={styles.prg}>
              The use of BookArcanum is at your own risk. We do not provide any
              explicit or implied warranties regarding the accuracy or
              completeness of the content. <br /> We are not responsible for
              direct, indirect, or consequential damages arising from the use of
              the application.
            </p>
          </section>

          <section>
            <h4 className={styles.title_h4}>Privacy Policy</h4>
            <p className={styles.prg}>
              Your privacy is important to us. For information on our privacy
              policy, please visit our privacy page. Thank you for exploring the
              world of BookExplorer!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
