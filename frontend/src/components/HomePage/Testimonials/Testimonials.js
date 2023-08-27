import React from "react";
import styles from "./Testimonials.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsStarFill } from "react-icons/bs";

function Testimonials() {
  return (
    <>
      <div className={styles.testimonials}>
        <div className={styles.head}>Testimonials</div>
        <div className={styles.subhead}>Happy Customers</div>
        <div className={styles.subheaddesc}>
          Experience the stories of satisfaction and joy shared by our
          customers, reflecting the exceptional service we're committed to
          providing.
        </div>
      </div>
      <div className={styles.testimonial}>
        <div className={styles.testimonials_text}>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            axis="horizontal"
          >
            <div className={styles.reviewanduser}>
              <div className={styles.user}>
                <div className={styles.userimage}>
                  <img
                    src="https://i.pinimg.com/564x/cb/ea/d5/cbead5216351735fd535a81fdc684fb6.jpg"
                    alt="Random"
                  ></img>
                </div>
                <div className={styles.userName}>Aditya</div>
                <div className={styles.stars}>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
              </div>
              <div className={styles.review}>
                " Embracing this streaming platform has been a revelation. The
                impeccable content quality and uninterrupted streaming have
                redefined my entertainment landscape. Catering to the fervent
                sports aficionado in me, it's a comprehensive hub for live
                matches and events. From thrilling game nights to exclusive
                insights, this website encapsulates the essence of modern sports
                viewing. A testament to cutting-edge technology and a
                game-changing addition to my leisure pursuits. "
              </div>
            </div>
            <div className={styles.reviewanduser}>
              <div className={styles.user}>
                <div className={styles.userimage}>
                  <img
                    src="https://i.pinimg.com/564x/cb/ea/d5/cbead5216351735fd535a81fdc684fb6.jpg"
                    alt="Random"
                  ></img>
                </div>
                <div className={styles.userName}>Himanshu</div>
                <div className={styles.stars}>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
              </div>
              <div className={styles.review}>
                " Embracing this streaming platform has been a revelation. The
                impeccable content quality and uninterrupted streaming have
                redefined my entertainment landscape. Catering to the fervent
                sports aficionado in me, it's a comprehensive hub for live
                matches and events. From thrilling game nights to exclusive
                insights, this website encapsulates the essence of modern sports
                viewing. A testament to cutting-edge technology and a
                game-changing addition to my leisure pursuits. "
              </div>
            </div>
            <div className={styles.reviewanduser}>
              <div className={styles.user}>
                <div className={styles.userimage}>
                  <img
                    src="https://i.pinimg.com/564x/cb/ea/d5/cbead5216351735fd535a81fdc684fb6.jpg"
                    alt="Random"
                  ></img>
                </div>
                <div className={styles.userName}>Rahul</div>
                <div className={styles.stars}>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
              </div>
              <div className={styles.review}>
                " Embracing this streaming platform has been a revelation. The
                impeccable content quality and uninterrupted streaming have
                redefined my entertainment landscape. Catering to the fervent
                sports aficionado in me, it's a comprehensive hub for live
                matches and events. From thrilling game nights to exclusive
                insights, this website encapsulates the essence of modern sports
                viewing. A testament to cutting-edge technology and a
                game-changing addition to my leisure pursuits. "
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
