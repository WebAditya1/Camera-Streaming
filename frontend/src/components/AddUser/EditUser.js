import React, { useState, useEffect } from "react";
import styles from "./AddUser.module.css";
import { RxCross2 } from "react-icons/rx";
import Backdrop from "../Backdrop/Backdrop";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { API } from "../../config";
import ReactHlsPlayer from "react-hls-player";

function EditUser({ setEditOpen, getData, profile }) {
  const [spin, setSpin] = useState(false);
  const [email, setEmail] = useState(profile.email);
  const [password, setPassword] = useState(profile.password);
  const [username, setUserName] = useState(profile.name);
  const [admin, setAdmin] = useState(profile.isAdmin);
  const [camera, setCamera] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState(profile.views);

  const getCameraData = async () => {
    const data = await fetch(`${API}/camera/list`);
    const json = await data.json();
    console.log(json);
    setCamera(json.cameraList);
    setSpin(false);
  };

  const change = () => {
    setEditOpen(false);
  };

  const updateUser = async (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
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
      .put(`${API}/user/${profile._id}`, data)
      .then((res) => {
        setSpin(false);
        console.log(res);
        setEditOpen(false);
        getData();
      })
      .catch((err) => {
        console.log(err.message);
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
        <div className={styles.cross} onClick={() => setEditOpen(false)}>
          <RxCross2 />
        </div>
        <div className={styles.userHeading}>Edit User Details</div>
        <form onSubmit={updateUser}>
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
                value={username}
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
                value={email}
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
                value={password}
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
                value={admin}
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
                      checked={selectedCamera.find((v) => v === i._id)}
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
            <input
              type="submit"
              className={styles.addUserSubmit}
              value="Edit"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default EditUser;
