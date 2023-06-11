import React, { useState, useEffect } from "react";
import styles from "./Camera.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditCamera from "../AddCamera/EditCamera";
import Spinner from "../Spinner/Spinner";
import { API } from "../../config";
import AddCamera from "../AddCamera/AddCamera";
import axios from "axios";

function Camera() {
  const [open, setOpen] = useState(false);
  const [editopen, setEditOpen] = useState(false);
  const [selectedCam, setSelectedCam] = useState();
  const [camera, setCamera] = useState([]);
  const [spin, setSpin] = useState(true);

  const getData = async () => {
    const data = await fetch(`${API}/camera/list`);
    const json = await data.json();
    console.log(json);
    setCamera(json.cameraList);
    setSpin(false);
  };

  const DeleteData = async (id) => {
    setSpin(true);
    axios
      .delete(`${API}/camera/${id}`)
      .then((response) => {
        getData();
        setSpin(false);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {spin ? <Spinner /> : null}
      {open ? <AddCamera setOpen={setOpen} getData={getData} /> : null}
      {editopen ? (
        <EditCamera
          setEditOpen={setEditOpen}
          selectedCam={selectedCam}
          getData={getData}
        />
      ) : null}
      <div className={styles.adminContainer}>
        <div className={styles.admintableanduser}>
          <table>
            <tr className={styles.gridContainerHeader}>
              <th className={styles.gridItemBody}>Camera Name</th>
              <th className={styles.gridItemBody}>Camera Link</th>
              <th className={styles.gridItemBody}>Modify</th>
              <th className={styles.gridItemBody}>Delete</th>
            </tr>
            <tbody>
              {camera.length === 0 ? (
                <>
                  <div className={styles.gridEmptyBody}>
                    <div>Camera List seems Empty !!</div>
                    <div>Try Adding Some.</div>
                  </div>
                </>
              ) : (
                camera.map((i, index) => {
                  return (
                    <tr className={styles.gridContainerBody}>
                      <td className={styles.gridItemName}>
                        <div className={styles.viewname}>{i.cameraName}</div>
                      </td>
                      <td className={styles.gridItemView}>
                        <a href={i.link} target="_blank">
                          <div
                            style={{
                              cursor: "pointer",
                              textDecoration: "underline",
                              color: "blue",
                            }}
                          >
                            Link
                          </div>
                        </a>
                      </td>
                      <td className={styles.gridItemModify}>
                        <button
                          onClick={() => (setEditOpen(true), setSelectedCam(i))}
                        >
                          Modify
                        </button>
                      </td>
                      <td className={styles.gridItemDelete}>
                        <div
                          className={styles.delete}
                          onClick={() => DeleteData(i._id)}
                        >
                          <RiDeleteBin6Line />
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
          <div className={styles.addUser}>
            <button
              className={styles.addUserButton}
              onClick={() => setOpen(true)}
            >
              Add Camera
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Camera;
