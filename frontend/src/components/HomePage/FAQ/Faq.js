import React, { useState } from "react";
import styles from "./Faq.module.css";
import { BsPlusCircle } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";

function Faq() {
  const [open, setOpen] = useState([true, false, false, false]);
  const arr = [1, 2, 3, 4];
  const questions = [
    "Can I watch local sports in my area?",
    "What is the video quality and how much bandwidth do I need?",
    "How can I stream sports on multiple devices at the same time?",
    "What is the pricing of the services?",
  ];

  const toggleAnswer = (index) => {
    const updatedOpen = [...open];
    updatedOpen[index] = !updatedOpen[index];
    setOpen(updatedOpen);
  };

  return (
    <div className={styles.faq}>
      <div className={styles.head}>Got Any Questions ?</div>
      <div className={styles.subhead}>We got Answers</div>
      <div className={styles.subheaddesc}>
        We're Here to Help. We value our relationship with you and strive to
        provide you with assistance and answers when you need it.
      </div>
      <div className={styles.questionsandanswers}>
        {arr.map((i, index) => {
          return (
            <>
              <div className={styles.eachquestionanswer}>
                <div className={styles.questionrow}>
                  <div className={styles.question}>{questions[index]}</div>
                  {open[index] ? (
                    <div
                      className={styles.icon}
                      onClick={() => toggleAnswer(index)}
                    >
                      <BiMinusCircle />
                    </div>
                  ) : (
                    <div
                      className={styles.icon}
                      onClick={() => toggleAnswer(index)}
                    >
                      <BsPlusCircle />
                    </div>
                  )}
                </div>
                {open[index] ? (
                  <div className={styles.answer}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam auctor, quam at ullamcorper dictum, leo turpis
                    sollicitudin libero, nec porttitor lorem justo at tellus.
                    Suspendisse at aliquet urna, nec vestibulum ligula. Nulla
                    facilisi. Quisque vel tempor justo. Nam efficitur mi at enim
                    fermentum, at accumsan magna hendrerit.
                  </div>
                ) : null}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
