import React, { useState, useEffect } from "react";
import styles from "./User.module.css";
import { API } from "../../config";
import Live from "./Live";
import Recording from "./Recording";
import Spinner from "../Spinner/Spinner";

function User() {
  const [camera, setCamera] = useState([]);
  const [spin, setSpin] = useState(true);
  const [index, setIndex] = useState(0);

  const getData = async () => {
    const data = await fetch(`${API}/camera/list`);
    const json = await data.json();
    console.log(json);
    setCamera(json.cameraList);
    setSpin(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {spin ? <Spinner /> : null}
      <div className={styles.userContainer}>
        <div className={styles.userViews}>
          <div className={styles.viewHeading}>
            Welcome to How I Play 
            <br />
            The ultimate Sports streaming website!
          </div>
          <div className={styles.viewsubHeading}>
            At How I Play, we provide a cutting-edge platform for users to access
            real-time video feeds from a vast network of high-quality CCTV
            cameras worldwide. Our website offers a seamless and immersive
            experience, allowing you to observe various locations, sports, and
            landmarks from the comfort of your own device.
          </div>
          {/* <div className={styles.toggle}>
            <div
              className={index === 0 ? styles.website : styles.websiteunactive}
              onClick={() => setIndex(0)}
            >
              <h4>Live</h4>
            </div>
            <div
              className={index === 1 ? styles.businessactive : styles.business}
              onClick={() => setIndex(1)}
            >
              <h4>Recording</h4>
            </div>
          </div> */}
          {index === 0 ? <Live camera={camera} /> : <Recording />}
        </div>
      </div>
    </>
  );
}

export default User;
