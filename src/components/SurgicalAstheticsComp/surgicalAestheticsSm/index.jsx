import React, { useState } from "react";
import Eyelid from "../../../assets/eyelid.png";
import Chin from "../../../assets/chin.png";
import Facial from "../../../assets/facial.png";
import LipoSuction from "../../../assets/liposuction.png";
import ArmLift from "../../../assets/armlift.png";
import Breast from "../../../assets/breast.png";
import Tummy from "../../../assets/tummy.png";
import Thigh from "../../../assets/thigh.png";
import Dot from "../../../assets/dot.png";
import DottedCircle from "../../../assets/dottedcircle.png";
import CuteTummy from "../../../assets/cutetummy.png";

import styles from "./style.module.css";
const SurgicalAestheticsSm = ({ screenSize }) => {
  const [select, setSelect] = useState({
    id: null,
    content: "Botox",
    img: Eyelid,
  });

  const data = [
    {
      id: 1,
      img: Eyelid,
      content: "Eyelid",
      select: false,
    },
    {
      id: 2,
      img: Chin,
      content: "Chin Liposuction",
      select: false,
    },
    {
      id: 3,
      img: Facial,
      content: "Facial Asthetics",
      select: false,
    },
    {
      id: 4,
      img: LipoSuction,
      content: "Liposuction",
      select: false,
    },
    {
      id: 5,
      img: ArmLift,
      content: "Arm Lift",
      select: false,
    },
    {
      id: 6,
      img: Breast,
      content: "Breast Aesthetics",
      select: false,
    },
    {
      id: 7,
      img: Tummy,
      content: "Tummy Tuck",
      select: false,
    },
    {
      id: 8,
      img: Thigh,
      content: "Thigh Lift",
      select: false,
    },
  ];
  const dotImgs = [
    {
      id: 1,
      img: Dot,
      top:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "140px"
              : "170px"
            : "220px"
          : "240px",
      left:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "240px"
              : "295px"
            : "380px"
          : "420px",
    },
    {
      id: 2,
      img: Dot,
      top:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "200px"
              : "250px"
            : "340px"
          : "390px",
      left:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "260px"
              : "320px"
            : "410px"
          : "470px",
    },
    {
      id: 3,
      img: Dot,
      top:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "230px"
              : "295px"
            : "395px"
          : "460px",
      left:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "230px"
              : "280px"
            : "355px"
          : "400px",
    },
    {
      id: 4,
      img: Dot,
      top:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "180px"
              : "230px"
            : "300px"
          : "360px",
      left:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "265px"
              : "325px"
            : "420px"
          : "480px",
    },
    {
      id: 5,
      img: Dot,
      top:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "178px"
              : "225px"
            : "295px"
          : "345px",
      left:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "202px"
              : "240px"
            : "295px"
          : "330px",
    },
    {
      id: 6,
      img: Dot,
      top:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "150px"
              : "190px"
            : "250px"
          : "280px",
      left:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "205px"
              : "240px"
            : "295px"
          : "330px",
    },
    {
      id: 7,
      img: Dot,
      top:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "185px"
              : "235px"
            : "310px"
          : "360px",
      left:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "222px"
              : "265px"
            : "335px"
          : "375px",
    },
    {
      id: 8,
      img: Dot,
      top:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "202px"
              : "260px"
            : "345px"
          : "400px",
      left:
        screenSize < 768
          ? screenSize < 640
            ? screenSize < 440
              ? "235px"
              : "285px"
            : "370px"
          : "410px",
    },
  ];

  const dotHandler = (id) => {
    for (var i = 0; i < data.length; i++) {
      if (id === data[i].id) {
        data[i].select = !data[i].select;
        setSelect({ id: id, content: data[i].content, img: data[i].img });
      } else {
        data[i].select = false;
      }
    }
  };
  console.log(select);
  return (
    <div style={{ paddingTop: "100px" }}>
      <div className={styles.imageSec}>
        <div className={styles.containImage}>
          {dotImgs.map((item) => (
            <img
              key={item.id}
              alt="Dots"
              src={item.img}
              onClick={() => dotHandler(item.id)}
              className={`position-absolute ${styles.dottedImg}`}
              style={{ top: item.top, left: item.left, zIndex: 2 }}
            />
          ))}

          <img
            src={CuteTummy}
            alt="Cute Face"
            className={`position-absolute ${styles.cuteImg}`}
          />
          <img
            src={DottedCircle}
            alt="Dotted Circle"
            className={`position-absolute ${styles.dottedCircle}`}
          />
          <div className={`${styles.selectedImg}`}>
            <p style={{ width: "400px" }}>{select.content}</p>
            <img
              className={styles.resImg}
              style={{ paddingLeft: "10px" }}
              src={select.img}
              alt="URL"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurgicalAestheticsSm;
