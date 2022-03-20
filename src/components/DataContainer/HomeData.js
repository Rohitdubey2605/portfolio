import styles from "./HomeData.module.css";
import Card from "../UI/Card";
const HomeData = (props) => {
  return (
    <Card>
      <div className={styles.HomeData}>
        <h1 className={styles.h1}>Rohit Dubey</h1>
        <p className={styles.p}>
          Hey, I am Rohit, a{" "}
          <strong className={styles.strong}>Senior Software Engineer</strong>{" "}
          building solutions at
          <a
            className={styles.textColor}
            href="https://www.odessainc.com/"
            target="_blank"
          >
            {" "}
            Odessa{" "}
          </a>
          i.e.
          <em className={styles.em}>
            {" "}
            Pricing Engine, Calculation Engine, GEC
          </em>{" "}
          etc.
          <p className={styles.p}>
            I currently write code in technologies like{" "}
            <strong>.NET, C#, JavaScript, React.js</strong> and have been
            exploring
            <strong> Angular & NodeJS</strong> these days.
          </p>
          <p className={styles.p}>
            I love trying my hands on new technologies to keep myself updated.
            Ohh, not only this, I am good in
            <em className={styles.em}> Data Structures & Algorithms </em> as
            well and spend some of my time brushing up the concepts during the
            weekends.
          </p>
        </p>
      </div>
    </Card>
  );
};

export default HomeData;
