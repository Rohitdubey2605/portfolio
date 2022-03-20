import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <Fragment>
      <hr className={styles.hr} />
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/home">HOME</NavLink>
          </li>
          {/* <li>
            <NavLink  activeClassName={styles.active} to="/bio">BIO</NavLink>
          </li> */}
          <li>
            <NavLink activeClassName={styles.active} to="/work">WORK</NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/projects">PROJECTS</NavLink>
          </li>
          <li>
          <NavLink activeClassName={styles.active} to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </nav>
      <hr className={styles.hr} />
    </Fragment>
  );
};

export default Navigation;
