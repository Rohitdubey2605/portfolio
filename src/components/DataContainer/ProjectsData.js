import styles from "./ProjectsData.module.css";
import { Row, Col, Card } from "react-bootstrap";
import { Fragment } from "react";
const ProjectsData = (props) => {
  return (
    <Fragment>
      <Row className={styles.row6}>
        <Card className={styles.card}>
          <Col lg={6}>
            <Row className={styles.row2}>
              <Col className={styles.col2}>
                <div className={styles.a}>
                  <a
                    className={styles.a}
                    target="_blank"
                    href="https://rohitdubey-rd.web.app/"
                    rel="noreferrer"
                  >
                    <h3>Portfolio Web Application</h3>
                  </a>
                </div>
                <h3 className={styles.span}>2022</h3>
              </Col>
              <div className={styles.description}>
                A personal portfolio covering most of my professional
                experiences and journey which also consists of detailed
                information and has been designed using HTML, CSS, BootStrap,
                ReactJS, etc.
              </div>
            </Row>
          </Col>
        </Card>
        <Card className={styles.card}>
          <Col lg={6}>
            <Row className={styles.row2}>
              <Col className={styles.col2}>
                <div className={styles.a}>
                  <a
                    className={styles.a}
                    target="_blank"
                    href="https://foodcart-rd.web.app/"
                  >
                    <h3>FoodCart</h3>
                  </a>
                </div>
                <h3 className={styles.span}>2022</h3>
              </Col>
              <div className={styles.description}>
                A single page application to order food using various important
                concepts of ReactJS. The application is fully responsive and
                supports all types of devices by writing its own CSS module &
                deployed on Firebase. This project also uses Firebase Realtime
                Database to store the items listing, user information when user
                orders something.
              </div>
            </Row>
          </Col>
        </Card>
      </Row>
      <Row className={styles.row6}>
        <Card className={styles.card}>
          <Col lg={6}>
            <Row className={styles.row2}>
              <Col className={styles.col2}>
                <div className={styles.a}>
                  <a className={styles.a} target="_blank">
                    <h3 className={styles.h3}>Pricing Engine</h3>
                  </a>
                </div>
                <h3 className={styles.span}>2021</h3>
              </Col>
              <div className={styles.description}>
                Developed Pricing Engine from scratch and took care of the
                application flow from UI to API integration. Worked with the
                team to get the features designed and developed under my
                supervision with minimal chance of errors. Integrated SSO, CDC
                and master data configuration in the product.
              </div>
            </Row>
          </Col>
        </Card>
        <Card className={styles.card}>
          <Col lg={6}>
            <Row className={styles.row2}>
              <Col className={styles.col2}>
                <div className={styles.a}>
                  <a className={styles.a} target="_blank">
                    <h3>Calculation Engine</h3>
                  </a>
                </div>
                <h3 className={styles.span}>2021</h3>
              </Col>
              <div className={styles.description}>
                Contributed in creation and enhancement of the internal project
                of Odessa which was developed to manage the calculations for
                Pricing Engine software. Also, developed new features using
                WebAPI as per the need of the organization.
              </div>
            </Row>
          </Col>
        </Card>
      </Row>

      <Row className={styles.row6}>
        <Card className={styles.card}>
          <Col lg={6}>
            <Row className={styles.row2}>
              <Col className={styles.col2}>
                <div className={styles.a}>
                  <a className={styles.a} target="_blank">
                    <h3>GEC</h3>
                  </a>
                </div>
                <h3 className={styles.span}>2019</h3>
              </Col>
              <div className={styles.description}>
                Worked on Lessor Portal to enhance the product with bug fixes
                and also added various change requests as per client’s
                requirement. Added Report generation functionality in product
                using SSRS. Automated internal site releases using Octopus
                deploy and managed client’s release process.
              </div>
            </Row>
          </Col>
        </Card>
        <Card className={styles.card}>
          <Col lg={6}>
            <Row className={styles.row2}>
              <Col className={styles.col2}>
                <div className={styles.a}>
                  <a className={styles.a} target="_blank">
                    <h3>Automatic Certificate Management System</h3>
                  </a>
                </div>
                <h3 className={styles.span}>2018</h3>
              </Col>
              <div className={styles.description}>
                Designed the Front-end using ReactJS to generate automated
                certificates for any event based on different criteria.
              </div>
            </Row>
          </Col>
        </Card>
      </Row>
    </Fragment>
  );
};

export default ProjectsData;
