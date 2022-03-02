import styles from './MainHeader.module.css';
import logo from '../../logoRD.jpg';
const MainHeader = () =>
{
    return (
       <div className={styles.MainHeader}>
           <img className={styles.logo} src={logo} alt='RD' width='40' height='40'></img>
           <h1 className={styles.name}>Rohit Dubey</h1>
       </div>
    );

}

export default MainHeader;