import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import login from "../../images/Login.svg";

function Account() {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTransition(true);
  }, []);

  return (
    <div
      className={`${styles.transitionContainer} ${transition && styles.active}`}
    >
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.innerleftContainer}>
            <div className={styles.content}>
              <div className={styles.bestViewhead}>
                Welcome to our <span>Website!</span>
              </div>
              <div className={styles.bestViewsubhead}>
                Here, you can access your personal account to view and manage
                your camera settings, photos, and videos. Simply enter your
                username and password to login and begin exploring all the
                features our site has to offer.
              </div>
              <Link to="/account/login">
                <div className={styles.signbuttondiv}>
                  <button className={styles.signbutton}>Sign in</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.innerrightContainer}>
            <img src={login} alt="LOGIN" className={styles.Loginimage}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
