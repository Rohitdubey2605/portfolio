import CardComponent from "../UI/Card";
import styles from "./WorkData.module.css";
import { Row, Col } from "react-bootstrap";
const WorkData = (props) => {
  return (
    <Row className={styles.WorkData}>
      {/* <Col lg={6}>
        <CardComponent>
          <header className={styles.header}>Senior Software Engineer</header>
          <hr />
          <h6 className={styles.h6}>
            <b>Odessa Inc.</b>
          </h6>
          <span className={styles.span}>March 2022 - Present</span>
          <p className={styles.p}>
            started my journey as a Full stack developer and worked on various
            technologies.
          </p>
          <h6 className={styles.h6}>
            Technology Stack: ReactJS, HTML, CSS, .Net, C#, SQL Server, Linq
          </h6>
        </CardComponent>
      </Col> */}

      <Col lg={6}>
        <CardComponent className={styles.cardStyle}>
          <header className={styles.header}>Software Engineer</header>
          <hr />
          <h6 className={styles.h6}>
            <b>Odessa Inc.</b>
          </h6>
          <span className={styles.span}>May 2019 - Present</span>
          <p className={styles.p}>
            <ul>
              <li>
                Worked on the product of the company, i.e. Pricing Engine,
                Calculation Engine, GEC, etc.
              </li>
              <li>
                Designed Pricing Engine from scratch and integrated SSO, CDC and
                many more to manage the application flow from UI to APIs
                integration.
              </li>
            </ul>
          </p>
          <h6 className={styles.h6}>
            Technology Stack: ReactJS, HTML, CSS, .Net, C#, SQL Server, Linq
          </h6>
        </CardComponent>
      </Col>

      <Col lg={6}>
        <CardComponent>
          <header className={styles.header}>Software Engineer Intern</header>
          <hr />
          <h6 className={styles.h6}>
            <b>Odessa Inc.</b>
          </h6>
          <span className={styles.span}>Oct 2018 - May 2019</span>
          <p className={styles.p}>
            <ul>
              <li>
                Worked in a team-oriented environment for all aspects of product
                development (design, implementation, test, and maintenance
                support).
              </li>
              <li>
                Contributed to group meetings and provided status updates on
                development tasks for progress reporting
              </li>
            </ul>
          </p>
          <h6 className={styles.h6}>
            Technology Stack: .Net, C#, SQL Server, Linq,HTML, CSS, JavaScript
          </h6>
        </CardComponent>
      </Col>
      {/* <Col lg={4}>
        <CardComponent>
          <header>Software Engineer Intern</header>
          <hr />
          <h6>
            <b>Odessa Inc.</b>
          </h6>
          <span>Oct 2018 - May 2019</span>
          <p>
            started my journey as a Full stack developer and worked on various
            technologies.
          </p>
          <h6>Technology Stack: .Net, C#, SQL Server, Linq</h6>
        </CardComponent>
      </Col> */}
    </Row>
  );
};

export default WorkData;
