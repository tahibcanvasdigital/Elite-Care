import React from "react";
import styles from "./style.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import img1 from "../../../assets/ourmission.png";
const OurMission = () => {
  return (
    <div className={styles.skinbodyWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12">
            <div className={styles.skincont}>
              <h4>Mission</h4>
              <h1>Our Mission Is To Improve Skin Body</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className={styles.servItems}>
              <IoIosArrowRoundForward />
              <p>We Strive To Bring Out The Best</p>
              <IoIosArrowRoundForward />
              <p>Bring Out The Best In You</p>
            </div>

            <div className={styles.servItems}>
              <IoIosArrowRoundForward />
              <p>Beauty & Glam Can Be Perfect</p>
              <IoIosArrowRoundForward />
              <p>Live Every Moment Beauty</p>
            </div>

            <button className={styles.contactBtn}>
              CONTACT WITH US <IoIosArrowRoundForward />
            </button>
          </div>

          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className={styles.missionimg}>
              <img src={img1} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
