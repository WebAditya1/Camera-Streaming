import React from "react";
import styles from "./Features.module.css";
import feature1 from "../../../images/Homepage/Features/feature1.jpg";
import feature2 from "../../../images/Homepage/Features/feature2.png";
import feature4 from "../../../images/Homepage/Features/feature3.png";
import feature3 from "../../../images/Homepage/Features/feature4.png";

function Features() {
  return (
    <div className={styles.featuresmain}>
      <div className={styles.headers}>
        <div className={styles.upperhead}>An Exhuastive list of</div>
        <div className={styles.middlehead}>Amazing features</div>
        <div className={styles.lowerhead}>
          Watch the game live at home or on the go. Stream live games from major
          college and pro leagues, including the NCAA, NBA, NHL, NFL, the
          English Premier League, and more.
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.feature}>
          <div className={styles.featureimage}>
            <img src={feature1} alt="Feature"></img>
          </div>
          <div className={styles.leftfeaturecontent}>
            <div className={styles.featurecontenthead}>
              OUR BEST STREAMING EXPERIENCE
            </div>
            <div className={styles.featurecontentsubhead}>
              Get a fan experience like no others
            </div>
            <div className={styles.featurecontentdesc}>
              Pick your favorite teams, sports, or leagues and we'll recommend
              games for you based on your selections.
            </div>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.featurecontent}>
            <div className={styles.featurecontenthead}>
              LIVE SPORTS ON ANY SCREEN
            </div>
            <div className={styles.featurecontentsubhead}>
              Worldwide channels in your hand
            </div>
            <div className={styles.featurecontentdesc}>
              Keep up with live sports when and where you want on all your
              supported devices - including NFL games live on your mobile
              phone.Live TV subscription allows you to watch live video on up to
              two screens simultaneously.
            </div>
          </div>
          <div className={styles.featureimage}>
            <img src={feature2} alt="Feature"></img>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureimage}>
            <img src={feature3} alt="Feature"></img>
          </div>
          <div className={styles.leftfeaturecontent}>
            <div className={styles.featurecontenthead}>PUSH NOTIFICATIONS</div>
            <div className={styles.featurecontentsubhead}>
              Find out when it's game time
            </div>
            <div className={styles.featurecontentdesc}>
              Get mobile push notifications that let you know when your games
              are about to start.
            </div>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.featurecontent}>
            <div className={styles.featurecontenthead}>RECORD & WATCH</div>
            <div className={styles.featurecontentsubhead}>
              Watch everything on your own time
            </div>
            <div className={styles.featurecontentdesc}>
              Record the sports you want to watch with 50 hours of included
              Cloud DVR storage - and the option to upgrade to 200 hours. Never
              miss a moment of the action.
            </div>
          </div>
          <div className={styles.featureimage}>
            <img src={feature4} alt="Feature"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
