import React from "react";
import surgery1 from "../../assets/surgery1.jpg";
import surgery2 from "../../assets/surgery2.jpg";
import Styles from "./style.module.css";

const SurgeryCenter = () => {
  return (

    <div className="container-fluid">
      <div className={`row ${Styles.h600} justify-content-evenly`}>
        <div className={`col-12  col-sm-12 col-md-6 col-lg-4 ${Styles.surgerycol1}   align-self-center `}>
          <div className={`${Styles.surgery1}`}>
            <img src={surgery1} alt="" className="" />
          </div>
          <div className={`${Styles.surgery2}`}>
            <img src={surgery2} alt="" className="" />
          </div>
        </div>
        <div className={`col-12  col-sm-12 col-md-6 col-lg-6 ${Styles.surgerycol2} align-self-center `}>
          <div className={Styles.textsurgery}>
            <h4>SURGERY CENTER</h4>
            <h1>WE ARE THE LEADING PLACTIC SURGERY CENTER</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus rem suscipit unde quis nesciunt, mollitia eius velit at
              repellat dolorum quibusdam laboriosam debitis eum veniam minima
              fuga perspiciatis. Eaque.
              Doloribus rem suscipit unde quis nesciunt, mollitia eius velit at
              repellat dolorum quibusdam laboriosam debitis eum veniam minima
              fuga perspiciatis. Eaque.
            </p>
          </div>
          <div className={`row  `}>
             <div className="col-3  col-md-3  col-lg-2  align-self-center">
              <div className={Styles.testimonalImg}>
              <img src={surgery1} alt="" />
              </div>
             </div>
             <div className="col-8   col-md-8 col-lg-8">
                <h2>MIXER Y . YELLOW</h2>
                <p>Doctor</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurgeryCenter;
