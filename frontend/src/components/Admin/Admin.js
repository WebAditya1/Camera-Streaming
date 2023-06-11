import React, { useState, useEffect } from "react";
import styles from "./Admin.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddUser from "../AddUser/AddUser";
import EditUser from "../AddUser/EditUser";
import Spinner from "../Spinner/Spinner";
import axios from "axios";
import { API } from "../../config";

function Admin() {
  const [open, setOpen] = useState(false);
  const [editopen, setEditOpen] = useState(false);
  const [profile, setProfile] = useState();
  const [users, setUsers] = useState([]);
  const [spin, setSpin] = useState(true);

  const getData = async () => {
    const data = await fetch(`${API}/user/list`);
    const json = await data.json();
    console.log(json);
    setUsers(json.userList);
    setSpin(false);
  };

  const DeleteData = async (id) => {
    setSpin(true);
    axios
      .delete(`${API}/user/${id}`)
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
      {open ? <AddUser setOpen={setOpen} getData={getData} /> : null}
      {editopen ? (
        <EditUser
          setEditOpen={setEditOpen}
          getData={getData}
          profile={profile}
        />
      ) : null}
      <div className={styles.adminContainer}>
        <div className={styles.admintableanduser}>
          <table>
            <tr className={styles.gridContainerHeader}>
              <th className={styles.gridItemBody}>User name</th>
              <th className={styles.gridItemBody}>E-mail</th>
              <th className={styles.gridItemBody}>Modify</th>
              <th className={styles.gridItemBody}>Delete</th>
            </tr>
            <tbody>
              {users.length === 0 ? (
                <>
                  <div className={styles.gridEmptyBody}>
                    <div>Users List seems Empty !!</div>
                    <div>Try Adding Some.</div>
                  </div>
                </>
              ) : (
                users.map((i, index) => {
                  return (
                    <tr className={styles.gridContainerBody}>
                      <td className={styles.gridItemName}>
                        <div className={styles.profilenameandpic}>
                          <div>
                            <img src={i.pic} alt="Pic" />
                          </div>
                          <div>{i.name}</div>
                        </div>
                      </td>
                      <td className={styles.gridItemView}>{i.email}</td>
                      <td className={styles.gridItemModify}>
                        <button
                          onClick={() => (setEditOpen(true), setProfile(i))}
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
              Add User
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
