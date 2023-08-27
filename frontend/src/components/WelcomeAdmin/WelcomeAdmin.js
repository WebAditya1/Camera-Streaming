import React from "react";
import styles from "./WelcomeAdmin.module.css";
import { Link } from "react-router-dom";
import Partner from "../../images/Admin/Partner.svg";
import Testimonials from "../../images/Admin/Testimonials.svg";
import camera from "../../images/Admin/camera.jpg";
import user from "../../images/Admin/user.jpg";
import display from "../../images/Admin/display.jpg";

function WelcomeAdmin() {
  return (
    <div className={styles.adminwelcomepage}>
      <div className={styles.heading}>Welcome to the Admin Dashboard</div>
      <div className={styles.subheading}>
        An all-in-one control center for managing your operations. Easily
        oversee users, content, and settings, streamlining administrative tasks.
        Stay organized, make informed decisions, and ensure efficient management
        with our intuitive interface.
      </div>
      <div className={styles.cardscontainer}>
        <Link to="user">
          <div className={styles.cards}>
            <img src={Partner} alt="Admin"></img>
            <div className={styles.cardname}>Add/Edit Manager</div>
          </div>
        </Link>
        <Link to="user">
          <div className={styles.cards}>
            <img src={user} alt="Admin"></img>
            <div className={styles.cardname}>Add/Edit User</div>
          </div>
        </Link>
        <Link to="camera">
          <div className={styles.cards}>
            <img src={camera} alt="Admin"></img>
            <div className={styles.cardname}>Add/Edit Cameras</div>
          </div>
        </Link>
        <Link to="/user">
          <div className={styles.cards}>
            <img src={display} alt="Admin"></img>
            <div className={styles.cardname}>User View</div>
          </div>
        </Link>
        <Link to="/user">
          <div className={styles.cards}>
            <img src={Testimonials} alt="Admin"></img>
            <div className={styles.cardname}>Manager View</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default WelcomeAdmin;
