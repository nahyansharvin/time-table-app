import React from "react";
import styles from "./styles.module.css";
import BrandName from '../images/TinkerHubLogo.png';
const Home = () => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.titleSection}>
        <div className={styles.mainTitle}>TIME TABLE</div>
        <div className={styles.subTitle}>EMEA COLLEGE KONDOTTY</div>
      </div>
      <div className={styles.bottomTitle}>
        Crafted with&#128150;
        <img className={styles.brandName} src={BrandName}/>
      </div>
    </div>
  );
};

export default Home;