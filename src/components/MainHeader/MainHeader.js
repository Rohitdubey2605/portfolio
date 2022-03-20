import styles from "./MainHeader.module.css";
import logo from "../../logoRD.png";
import resume from "../../assets/Resume/Rohit_Dubey_Resume.pdf";
const MainHeader = () => {
  return (
    <div className={styles.MainHeader}>
      <img
        className={styles.logo}
        src={logo}
        alt="RD"
        width="40"
        height="40"
      ></img>
      <h1 className={styles.name}>Rohit Dubey</h1>
      <a href={resume} download>
        <button className={styles.btn}>Download Resume</button>
      </a>
    </div>
  );
};

export default MainHeader;
