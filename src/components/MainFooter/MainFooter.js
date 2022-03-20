import styles from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <footer className={styles.MainFooter}>
      <span>&copy; 2022 Copyright: </span>
      <a
        className={styles.copyright}
        href="https://wa.me/8968779167"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Rohit Dubey
      </a>
    </footer>
  );
};

export default MainFooter;
