import styles from "./HomeData.module.css";
import Card from "../UI/Card";
const HomeData = (props) => {
  return (
    <Card>
      <div className={styles.HomeData}>
        <h1 className={styles.h1}>Rohit Dubey</h1>
        <p className={styles.p}>
          I'm a <b>Senior Software Engineer</b> at{" "}
          <a
            className={styles.textColor}
            href="https://www.odessainc.com/"
            target="_blank"
            rel="noreferrer"
          >
            Odessa Tech
          </a>{" "}
          working on .Net as the technology stack. I'm also leading Google
          Developers Group, Jalandhar as an Organizer and WTM Ambassador.
        </p>
        <p>
          Along with that, I am the Gold facilitator of #IamRemarkable workshop,
          an initiative by Google and the Chapter Lead for Malikah.
        </p>
        <p>
          You can find me spending a lot of free time with #GDGJalandhar &
          #WTMJalandhar and mentoring people who are interested in technology.
        </p>
      </div>
    </Card>
  );
};

export default HomeData;
