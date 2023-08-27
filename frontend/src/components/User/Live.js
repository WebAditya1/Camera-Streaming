import React, { useState } from "react";
import styles from "./User.module.css";
import ReactHlsPlayer from "react-hls-player";

function Live({ camera }) {
  const [authenticated] = useState(
    localStorage.getItem("Authentication") != null
      ? JSON.parse(localStorage.getItem("Authentication"))
      : null
  );

  return (
    <div className={styles.videos}>
      {camera.map((i, index) => {
        if (authenticated?.views.includes(i._id)) {
          return (
            <div className={styles.eachvideo}>
              <div className={styles.eachvideoname}>{i.cameraName}</div>
              <div className={styles.userViewItem}>
                <ReactHlsPlayer
                  src={i.link}
                  autoPlay={true}
                  controls={true}
                  width="100%"
                  height="auto"
                  hlsConfig={{
                    maxLoadingDelay: 0,
                    minAutoBitrate: 0,
                    lowLatencyMode: true,
                  }}
                />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Live;
