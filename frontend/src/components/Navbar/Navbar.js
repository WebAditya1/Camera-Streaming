import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import styles from "./Nav.module.css";
import logo from "../../images/logo.png";
import Spinner from "../Spinner/Spinner";
import { AuthContext } from "../../App";

function Navbar() {
  const [spin, setSpin] = useState(false);
  const [show, toggleShow] = React.useState(false);
  const [open, setOpen] = useState(false);
  const auth = useContext(AuthContext);
  const { authenticated, toggleAuthentication } = auth;
  const navigate = useNavigate();

  const logout = (e) => {
    console.log("Hello");
    toggleAuthentication(null);
    localStorage.clear();
    navigate('/');
  };

  return (
    <>
      {open ? <Navigate to="/" /> : null}
      {spin ? <Spinner /> : null}
      <div className={styles.Navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo"></img>
        </div>
        <div className={styles.rightNavbar}>
          <div className={styles.hiAdmin}>Hi, {authenticated?.name}</div>
          <button onClick={() => toggleShow(!show)}>
            <div className={styles.profileImg}>
              <img src={authenticated?.pic} alt="ProfilePic" />
              {show && (
                <div className={styles.dropdown}>
                  <div className={styles.list} onClick={(e) => logout(e)}>
                    Logout
                  </div>
                </div>
              )}
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
