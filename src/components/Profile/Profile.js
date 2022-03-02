import styles from "./Profile.module.css";
import homeProfileImage from "../../assets/homepageProfiles/homeProfile.jpg";
const Profile = () => {
  return (
    <div className={styles.Profile}>
      <img
        src={homeProfileImage}
        className={styles.Image}
        alt="Rohit Dubey"
      ></img>
    </div>
  );
};

export default Profile;
