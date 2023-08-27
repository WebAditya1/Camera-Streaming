import React from "react";
import styles from "./Home.module.css";
import icon1 from "../../../images/Homepage/Home/icon1.png";
import icon2 from "../../../images/Homepage/Home/icon2.png";
import icon3 from "../../../images/Homepage/Home/icon3.png";
import icon4 from "../../../images/Homepage/Home/icon4.png";

function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homesection}>
        <div className={styles.homebgimage}></div>
        <div className={styles.homecontent}>
          <div className={styles.upperhomecontent}>See what’s next</div>
          <div className={styles.middlehomecontent}>
            Watch Live Sports Streams
          </div>
          <div className={styles.lowerhomecontent}>
            Stream the top sports networks and live games from major pro and
            college leagues, including the NFL, NBA, NCAA football, NHL, EPL
            soccer, MLB and more.
          </div>
        </div>
      </div>
      <div className={styles.desc}>
        <div className={styles.firstdesc}>
          <div className={styles.descimage}>
            <img src={icon1} alt="Icon"></img>
          </div>
          <div className={styles.desccontent}>
            No commitments Cancel online at anytime
          </div>
        </div>
        <div className={styles.firstdesc}>
          <div className={styles.descimage}>
            <img src={icon2} alt="Icon"></img>
          </div>
          <div className={styles.desccontent}>
            Watch anywhere on your own time
          </div>
        </div>
        <div className={styles.firstdesc}>
          <div className={styles.descimage}>
            <img src={icon3} alt="Icon"></img>
          </div>
          <div className={styles.desccontent}>
            Pick your price watch everything
          </div>
        </div>
        <div className={styles.firstdesc}>
          <div className={styles.descimage}>
            <img src={icon4} alt="Icon"></img>
          </div>
          <div className={styles.desccontent}>
            All latest football events are available
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home