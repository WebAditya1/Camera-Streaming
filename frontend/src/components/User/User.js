import React, { useState, useEffect, useRef } from "react";
import styles from "./User.module.css";
import axios from "axios";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import { API } from "../../config";

function User() {
  const [camera, setCamera] = useState([]);
  const [spin, setSpin] = useState(true);

  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("Authentication") != null
      ? JSON.parse(localStorage.getItem("Authentication"))
      : null
  );

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

  const videoRef = useRef(null);
  const [videoSource, setVideoSource] = useState("");

  useEffect(() => {
    const streamUrl = "https://exp-cam.osm.run/first/"; // The stream URL
    const videoElement = videoRef.current;

    const fetchVideoStream = async () => {
      try {
        const response = await fetch(streamUrl);
        const videoBlob = await response.blob();
        const videoUrl = URL.createObjectURL(videoBlob);

        setVideoSource(videoUrl);
      } catch (error) {
        console.error("Error fetching the video stream:", error);
      }
    };

    if (videoElement) {
      fetchVideoStream();
    }

    return () => {
      if (videoSource) {
        URL.revokeObjectURL(videoSource);
      }
    };
  }, [videoSource]);

  const videoLink =
    "https://www.youtube.com/watch?v=NiYDkFjxAAE&ab_channel=WWE";

  return (
    <div className={styles.userContainer}>
      <div className={styles.userViews}>
        <div className={styles.viewHeading}>
          Welcome to LiveEye
          <br />
          The ultimate CCTV camera streaming website!
        </div>
        <div className={styles.viewsubHeading}>
          At LiveEye, we provide a cutting-edge platform for users to access
          real-time video feeds from a vast network of high-quality CCTV cameras
          worldwide. Our website offers a seamless and immersive experience,
          allowing you to observe various locations, events, and landmarks from
          the comfort of your own device.
        </div>
        <div className={styles.videos}>
          {/* <Player>
            <source src={videoLink} />
          </Player>
          {camera.map((url, index) => (
            <video key={index} controls>
              <source src={url.link} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))} */}
          {camera.map((i, index) => {
            if (authenticated.views.includes(i._id)) {
              return (
                <div className={styles.eachvideo}>
                  <div className={styles.eachvideoname}>{i.name}</div>
                  <div className={styles.userViewItem}>
                    <video src={i.link} controls="controls" autoPlay="true" />
                    {/* <video ref={videoRef} src={videoSource} controls autoPlay /> */}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default User;
