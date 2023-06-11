import React from "react";
import styles from "./WelcomeAdmin.module.css";
import { Link } from "react-router-dom";
import Categories from "./Categories.svg";
import Partner from "./Partner.svg";
import Testimonials from "./Testimonials.svg";

function WelcomeAdmin() {
  return (
    <div className={styles.adminwelcomepage}>
      <div className={styles.heading}>WECOME ADMIN</div>
      <div className={styles.subheading}>Hello there</div>
      <div className={styles.cardscontainer}>
        <Link to="user">
          <div className={styles.cards}>
            <img src={Partner} alt="Admin"></img>
            <div className={styles.cardname}>Add/Edit User</div>
          </div>
        </Link>
        <Link to="camera">
          <div className={styles.cards}>
            <img src={Categories} alt="Admin"></img>
            <div className={styles.cardname}>Add/Edit Cameras</div>
          </div>
        </Link>
        <Link to="/user">
          <div className={styles.cards}>
            <img src={Testimonials} alt="Admin"></img>
            <div className={styles.cardname}>User View</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default WelcomeAdmin;
