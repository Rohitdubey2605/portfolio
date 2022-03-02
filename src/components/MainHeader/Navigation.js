import { Fragment } from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <Fragment>
      <hr className={styles.hr} />
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">BIO</a>
          </li>
          <li>
            <a href="/">WORK</a>
          </li>
          <li>
            <a href="/">PROJECTS</a>
          </li>
          <li>
            <a href="/">CONTACT</a>
          </li>
        </ul>
      </nav>
      <hr className={styles.hr} />
    </Fragment>
  );
};

export default Navigation;
