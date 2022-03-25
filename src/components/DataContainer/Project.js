import { Fragment } from "react";
import styles from "./Project.module.css";
import { Row, Col, Card } from "react-bootstrap";

const Project = (props) => {
  return (
    <Fragment>
      <div className={styles.container}>
        <Card className={styles.card}>
          <Col>
            <Row>
              <Col className={styles.col}>
                <div className={styles.a}>
                  <a
                    className={styles.a}
                    target="_blank"
                    href={props.url}
                    rel="noreferrer"
                  >
                    <h3>{props.name}</h3>
                  </a>
                </div>
                <h3 className={styles.span}>{props.period}</h3>
              </Col>
              <div className={styles.description}>{props.description}</div>
            </Row>
          </Col>
        </Card>
      </div>
    </Fragment>
  );
};

export default Project;
