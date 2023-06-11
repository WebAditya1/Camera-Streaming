import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import styles from "./Login.module.css";
import login from "../../images/Login.svg";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { API } from "../../config";

function Login() {
  const [sign, setSign] = useState(false);
  const [spin, setSpin] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [wrong, setWrong] = useState(false);
  const auth = useContext(AuthContext);
  const { authenticated, toggleAuthentication } = auth;
  const navigate = useNavigate();

  const saveData = async (event) => {
    event.preventDefault();
    event.target.reset();
    setSpin(true);
    const data = {
      email: email,
      password: password,
    };
    axios
      .post(`${API}/user/login/`, data)
      .then((res) => {
        toggleAuthentication(res.data.userData);
        console.log(res);
        setSpin(false);
        if (res.data.userData.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      })
      .catch((err) => {
        setWrong(true);
        console.log(err.message);
        setSpin(false);
      });
  };

  // useEffect(() => {
  //   localStorage.setItem("Authentication", JSON.stringify(authenticated));
  // }, [authenticated]);

  return (
    <>
      {spin ? <Spinner /> : null}
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.innerleftContainer}>
            {!sign ? (
              <div className={styles.content}>
                <div className={styles.bestViewhead}>
                  Welcome to our <span>Website!</span>
                </div>
                <div className={styles.bestViewsubhead}>
                  Here, you can access your personal account to view and manage
                  your camera settings, photos, and videos. Simply enter your
                  username and password to login and begin exploring all the
                  features our site has to offer.
                </div>
                <div
                  className={styles.signbuttondiv}
                  onClick={() => setSign(true)}
                >
                  <button className={styles.signbutton}>Sign in</button>
                </div>
              </div>
            ) : (
              <div className={styles.signInContainer}>
                <div className={styles.heading}>Sign In</div>
                <form onSubmit={saveData}>
                  <div className={styles.inputBox}>
                    <input
                      className={styles.inputBoxIn}
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    ></input>
                  </div>
                  <div className={styles.inputBox}>
                    <input
                      className={styles.inputBoxIn}
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    ></input>
                  </div>
                  {wrong ? (
                    <div style={{ color: "red" }}>Wrong Credentials</div>
                  ) : null}
                  <input
                    type="submit"
                    className={styles.signinButton}
                    value="Sign In"
                  ></input>
                </form>
              </div>
            )}
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.innerrightContainer}>
            <img src={login} alt="LOGIN" className={styles.Loginimage}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
