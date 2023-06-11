import React, { useState, useEffect } from "react";
import styles from "./AddCamera.module.css";
import { RxCross2 } from "react-icons/rx";
import Backdrop from "../Backdrop/Backdrop";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { API } from "../../config";

function EditCamera({ setEditOpen, selectedCam, getData}) {
  const [cameraName, setCameraName] = useState(selectedCam.cameraName);
  const [description, setDescription] = useState(selectedCam.description);
  const [link, setLink] = useState(selectedCam.link);
  const [spin, setSpin] = useState(false);

  const change = () => {
    setEditOpen(false);
  };

  const updateCamera = async (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    setSpin(true);
    const data = {
      cameraName: cameraName,
      description: description,
      link: link,
    };
    axios
      .put(`${API}/camera/${selectedCam._id}`, data)
      .then((res) => {
        console.log(res);
        setEditOpen(false);
        getData();
        setSpin(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      {spin ? <Spinner /> : null}
      <Backdrop show={true} switch={change} />
      <div className={styles.addUserForm}>
        <div className={styles.cross} onClick={() => setEditOpen(false)}>
          <RxCross2 />
        </div>
        <div className={styles.userHeading}>Edit Camera Details</div>
        <form onSubmit={updateCamera}>
        <div>
            <div className={styles.addUserLabel}>
              <label for="name">Camera name</label>
              <br />
            </div>
            <div className={styles.addUserInput}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Camera Name"
                value={cameraName}
                onChange={(event) => setCameraName(event.target.value)}
                required
              ></input>
            </div>
          </div>
          <div>
            <div className={styles.addUserLabel}>
              <label for="desc">Description</label>
              <br />
            </div>
            <div className={styles.addUserInput}>
              <input
                type="desc"
                id="desc"
                name="desc"
                placeholder="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
              ></input>
            </div>
          </div>
          <div>
            <div className={styles.addUserLabel}>
              <label for="Link">Link</label>
              <br />
            </div>
            <div className={styles.addUserInput}>
              <input
                type="Link"
                id="Link"
                name="Link"
                placeholder="Link"
                value={link}
                onChange={(event) => setLink(event.target.value)}
                required
              ></input>
            </div>
          </div>
          <div className={styles.buttons}>
            <input type="submit" className={styles.addUserSubmit} value="Edit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default EditCamera;
