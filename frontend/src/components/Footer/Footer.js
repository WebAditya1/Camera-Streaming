import React from "react";
import styles from "./Footer.module.css";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiLinkedinLine,
} from "react-icons/ri";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.leftfooter}>
        &#169; How I play | All rights Reserved
      </div>
      <div className={styles.rightfooter}>
        <div className={styles.icons}>
          <RiFacebookLine />
        </div>
        <div className={styles.icons}>
          <RiInstagramLine />
        </div>
        <div className={styles.icons}>
          <RiLinkedinLine />
        </div>
      </div>
    </div>
  );
}

export default Footer;
