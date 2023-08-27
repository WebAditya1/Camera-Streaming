import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";
import login from "../../images/Login.svg";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import { API } from "../../config";

function Register() {
  const [spin, setSpin] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [otp, setOtp] = useState();
  const [generatedotp, setGeneratedotp] = useState();
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();

  const generateOTP = () => {
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    setGeneratedotp(OTP);
  };

  var templateParams = {
    from_name: "How I play",
    to_name: name,
    message: "Your OTP for E-mail verification is " + generatedotp,
    message_2: "Please do not share this OTP with anyone.",
    to_email: email,
    reply_to: "howiplay95@gmail.com",
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_afglwk1",
        "template_3ppb4ww",
        templateParams,
        "VkWmQsqjQcwsP9vXM"
      )
      .then(
        (result) => {
          setVerified(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    generateOTP();
  }, []);

  const RegisterData = async (event) => {
    event.preventDefault();
    event.target.reset();
    if (otp === generatedotp) {
      setSpin(true);
      const data = {
        name: name,
        email: email,
        password: password
      };
      axios
        .post(`${API}/user/register/`, data)
        .then((res) => {
          console.log(res);
          setSpin(false);
          navigate('/account/login');
        })
        .catch((err) => {
          console.log(err.message);
          setSpin(false);
        });
    } else {
      alert("Wrong OTP");
    }
  };

  return (
    <>
      {spin ? <Spinner /> : null}
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.innerleftContainer}>
            <div className={styles.signInContainer}>
              <div className={styles.heading}>Sign Up</div>
              {verified ? (
                <form onSubmit={RegisterData}>
                  <div className={styles.inputBox}>
                    <input
                      className={styles.inputBoxIn}
                      type="text"
                      id="name"
                      name="name"
                      placeholder="UserName"
                      onChange={(event) => setName(event.target.value)}
                      required
                    ></input>
                  </div>
                  <div className={styles.inputBox}>
                    <input
                      className={styles.inputBoxIn}
                      type="email"
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
                  <div className={styles.inputBox}>
                    <input
                      className={styles.inputBoxIn}
                      type="number"
                      id="otp"
                      name="otp"
                      placeholder="Enter Verification OTP"
                      onChange={(event) => setOtp(event.target.value)}
                    ></input>
                  </div>
                  <input
                    type="submit"
                    className={styles.signinButton}
                    value="Sign Up"
                  ></input>
                </form>
              ) : (
                <form onSubmit={sendEmail}>
                  <div className={styles.inputBox}>
                    <input
                      className={styles.inputBoxIn}
                      type="text"
                      id="name"
                      name="name"
                      placeholder="UserName"
                      onChange={(event) => setName(event.target.value)}
                      required
                    ></input>
                  </div>
                  <div className={styles.inputBox}>
                    <input
                      className={styles.inputBoxIn}
                      type="email"
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
                  <div className={styles.inputBox}>
                    <input
                      className={styles.inputBoxInDisabled}
                      type="number"
                      id="otp"
                      name="otp"
                      placeholder="Enter Verification OTP"
                      onChange={(event) => setOtp(event.target.value)}
                      disabled
                    ></input>
                  </div>
                  <input
                    type="submit"
                    className={styles.signinButton}
                    value="Send Verification OTP"
                  ></input>
                </form>
              )}
              <div className={styles.signupmessage}>
                <div className={styles.signupnew}>Already a member </div>
                <Link to="/account/login">
                  <div className={styles.signupbutton}>SIGN IN</div>
                </Link>
              </div>
            </div>
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

export default Register;
