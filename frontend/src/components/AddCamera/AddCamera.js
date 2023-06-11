import React, {useState} from "react";
import styles from "./AddCamera.module.css";
import { RxCross2 } from "react-icons/rx";
import Backdrop from "../Backdrop/Backdrop";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { API } from "../../config";

function AddCamera({ setOpen, getData }) {
  const [cameraName, setCameraName] = useState();
  const [description, setDescription] = useState();
  const [link, setLink] = useState();
  const [spin, setSpin] = useState(false);

  const change = () => {
    setOpen(false);
  };

  const addCamera = async (event) => {
    event.preventDefault();
    event.target.reset();
    setSpin(true);
    const data = {
      cameraName: cameraName,
      description: description,
      link: link,
    };
    axios
      .post(`${API}/camera/add/`, data)
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

  return (
    <>
      {spin ? <Spinner /> : null}
      <Backdrop show={true} switch={change} />
      <div className={styles.addUserForm}>
        <div className={styles.cross} onClick={() => setOpen(false)}>
          <RxCross2 />
        </div>
        <div className={styles.userHeading}>Add Camera Details</div>
        <form onSubmit={addCamera}>
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
                onChange={(event) => setLink(event.target.value)}
                required
              ></input>
            </div>
          </div>
          <div className={styles.buttons}>
            <input type="submit" className={styles.addUserSubmit} value="Add" />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddCamera;
