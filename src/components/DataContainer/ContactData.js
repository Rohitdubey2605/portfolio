import styles from './ContactData.module.css';
import  Card  from "../UI/Card";
const ContactData = ()=>{
    return (
        <Card className={styles.Card}>
            <div className={styles.p}>
                <p>Connect with me today at:</p>
            </div>
            <div className={styles.links}>
                <a className={styles.a} rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/rohitdubey2605/'>LinkedIn</a>
                <a className={styles.a} rel="noreferrer" target='_blank' href='https://github.com/Rohitdubey2605'>GitHub</a>
                <a className={styles.a} rel="noreferrer" target='_blank' href='https://www.instagram.com/__damon__7/'>Instagram</a>
            </div>

        </Card>
    );
}

export default ContactData;