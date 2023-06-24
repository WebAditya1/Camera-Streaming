import React, {useState, useContext} from "react";
import { useNavigate} from "react-router-dom";
import styles from "./Nav.module.css";
import logo from "../../images/logo.png";
import { AuthContext } from "../../App";

function Navbar() {
  const [show, toggleShow] = useState(false);
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
