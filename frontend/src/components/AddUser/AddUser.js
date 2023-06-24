import React, { useState, useEffect } from "react";
import styles from "./AddUser.module.css";
import { RxCross2 } from "react-icons/rx";
import Backdrop from "../Backdrop/Backdrop";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { API } from "../../config";
import ReactHlsPlayer from "react-hls-player";

function AddUser({ setOpen, getData }) {
  const [spin, setSpin] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUserName] = useState();
  const [admin, setAdmin] = useState();
  const [camera, setCamera] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState([]);

  const getCameraData = async () => {
    const data = await fetch(`${API}/camera/list`);
    const json = await data.json();
    console.log(json);
    setCamera(json.cameraList);
    setSpin(false);
  };

  const change = () => {
    setOpen(false);
  };

  const addUser = async (event) => {
    event.preventDefault();
    event.target.reset();
    setSpin(true);
    const data = {
      name: username,
      email: email,
      password: password,
      isAdmin: admin,
      views: !admin ? selectedCamera : cameraIds,
    };
    console.log(data);
    axios
      .post(`${API}/user/register/`, data)
      .then((res) => {
        console.log(res);
        setSpin(false);
        setOpen(false);
        getData();
      })
      .catch((err) => {
        console.log(err.message);
        setSpin(false);
      });
  };

  useEffect(() => {
    getCameraData();
  }, []);

  var cameraIds = [];
  for (var i = 0; i < camera.length; i++) {
    cameraIds.push(camera[i]._id);
  }

  console.log(selectedCamera);

  return (
    <>
      {spin ? <Spinner /> : null}
      <Backdrop show={true} switch={change} />
      <div className={styles.addUserForm}>
        <div className={styles.cross} onClick={() => setOpen(false)}>
          <RxCross2 />
        </div>
        <div className={styles.userHeading}>Add User Details</div>
        <form onSubmit={addUser}>
          <div>
            <div className={styles.addUserLabel}>
              <label for="fname">User name</label>
              <br />
            </div>
            <div className={styles.addUserInput}>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter User Name"
                onChange={(event) => setUserName(event.target.value)}
                required
              ></input>
            </div>
          </div>
          <div>
            <div className={styles.addUserLabel}>
              <label for="email">Email</label>
              <br />
            </div>
            <div className={styles.addUserInput}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                onChange={(event) => setEmail(event.target.value)}
                required
              ></input>
            </div>
          </div>
          <div>
            <div className={styles.addUserLabel}>
              <label for="password">Password</label>
              <br />
            </div>
            <div className={styles.addUserInput}>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                required
              ></input>
            </div>
          </div>
          <div>
            <div className={styles.addUserLabel}>
              <label for="admin">Is the User Admin ?</label>
              <br />
            </div>
            <div className={styles.addUserInput}>
              <select
                name="reason"
                id="dropdown"
                className={styles.select}
                onChange={(event) => setAdmin(JSON.parse(event.target.value))}
                required
              >
                <option value="" disabled selected hidden>
                  Yes/No
                </option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </div>
          </div>
          {!admin ? (
            <div>
              <div className={styles.addUserLabel}>
                <label for="views">Select the Camera Views</label>
                <br />
              </div>
              {camera.map((i, index) => {
                return (
                  <label
                    for="camera"
                    className={styles.cameras}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        setSelectedCamera((prev) => {
                          return prev.find((v) => v === i._id)
                            ? prev.filter((v) => v !== i._id)
                            : [i._id, ...prev];
                        })
                      }
                      id="camera"
                      name="camera"
                    />
                    <span
                      style={{ marginLeft: "10px" }}
                      className={styles.video}
                    >
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
                    </span>
                    <span className={styles.camname}>{i.cameraName}</span>
                  </label>
                );
              })}
            </div>
          ) : null}
          <div className={styles.buttons}>
            <input type="submit" className={styles.addUserSubmit} value="Add" />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddUser;
