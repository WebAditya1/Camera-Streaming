import React, { useState } from "react";
import styles from "./User.module.css";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

function Recording() {
  const [startvalue, startonChange] = useState(new Date());
  const [endvalue, endonChange] = useState(new Date());

  const starttimestampInSeconds = new Date(startvalue).getTime() / 1000;
  const endtimestampInSeconds = new Date(endvalue).getTime() / 1000;

  const saveData = (e) => {
    e.preventDefault();
    console.log("HELLO");
  };

  return (
    <div className={styles.recording}>
      <form onSubmit={saveData}>
        <div className={styles.inputfields}>
          <div className={styles.start}>
            <div className={styles.starthead}>Start Time : </div>
            <DateTimePicker
              onChange={startonChange}
              value={startvalue}
              amPmAriaLabel="Select AM/PM"
              format="y-MM-dd h:mm:ss a"
              className={styles.calendar}
            />
          </div>
          <div className={styles.end}>
            <div className={styles.starthead}>End Time : </div>
            <DateTimePicker
              onChange={endonChange}
              value={endvalue}
              amPmAriaLabel="Select AM/PM"
              format="y-MM-dd h:mm:ss a"
              className={styles.calendar}
            />
          </div>
        </div>
        <input
          type="submit"
          className={styles.submitbutton}
          value="Submit"
        ></input>
      </form>
    </div>
  );
}

export default Recording;
