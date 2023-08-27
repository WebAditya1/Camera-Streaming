import React, { useState } from "react";
import styles from "./Contact.module.css";
import contactimg from '../../../images/Homepage/Contact/contact.png';

function Contact() {
  const [spin, setSpin] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const sendData = async (event) => {
    event.preventDefault();
    event.target.reset();
    setSpin(true);
    const data = {
      name: name,
      email: email,
      subject : subject,
      message: message,
    };
    // axios
    //   .post(`${API}/user/register/`, data)
    //   .then((res) => {
    //     console.log(res);
    //     setSpin(false);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //     setSpin(false);
    //   });
    console.log(data);
  };

  return (
    <div className={styles.contact}>
      <div className={styles.leftcontact}>
        <div className={styles.leftcontacthead}>
          Don't Hesitate to Contact us
        </div>
        <div className={styles.leftcontactsubhead}>
          We will respond within 24 hours
        </div>
        <form onSubmit={sendData}>
          <div className={styles.inputBox}>
            <input
              className={styles.inputBoxIn}
              type="text"
              id="name"
              name="name"
              placeholder="Name"
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
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              required
            ></input>
          </div>
          <div className={styles.inputBox}>
            <input
              className={styles.inputBoxIn}
              type="subject"
              id="subject"
              name="subject"
              placeholder="Subject"
              onChange={(event) => setSubject(event.target.value)}
              required
            ></input>
          </div>
          <div className={styles.inputBox}>
            <textarea
              className={styles.inputBoxTextArea}
              type="message"
              id="message"
              name="message"
              placeholder="Message"
              onChange={(event) => setMessage(event.target.value)}
              required
            ></textarea>
          </div>
          <input
            type="submit"
            className={styles.signinButton}
            value="Send Message"
          ></input>
        </form>
      </div>
      <div className={styles.rightcontact}>
        <div className={styles.head}>Contact Us</div>
        <div className={styles.subhead}>Get in Touch</div>
        <div className={styles.subheaddesc}>
          You are important to us and we are continuously improving our services
          to serve you better.
        </div>
        <div className={styles.contactimage}>
            <img src={contactimg} alt="Contact"></img>
        </div>
      </div>
    </div>
  );
}

export default Contact;
