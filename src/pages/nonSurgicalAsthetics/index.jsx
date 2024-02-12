import React from "react";
<<<<<<< HEAD
import Aesthetic from "../../components/asthetics";
import styles from "./style.module.css";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import logo from "../../assets/surgicalAst.png";
const NonSurgicalAsthetics = () => {
  const data = {
    h1: null,
    h2: "NON-SURGICAL AESTHETICS",
    h3: null,
    image: logo,
    button: null,
    height: "675px",
    imgTop: "165px",
  };
  return (
    <>
      <Navbar data={data} />
      <Aesthetic />
      <Footer />
    </>
  );
=======
import Navbar from "../../components/navbar";
import Aesthetic from "../../components/aesthetics";
import Footer from "../../components/footer";

import Surgical from '../../assets/Non-SurgicalAesthetics.png'

const NonSurgicalAsthetics = () => {
  const data = {
    h1: "WELCOME TO ELITE CARE",
    h2: "ENHANCE YOUR BEAUTY ",
    h3: "WITH PLASTIC SURGERY",
    image: Surgical,
    height: "865px",
    imgTop: "460px",
  };

  return <>
    <Navbar data={data} />
    <Aesthetic />
    <Footer />
  </>
>>>>>>> 765a50ce6ab51b94255d407b830868152bd7157c
};

export default NonSurgicalAsthetics;
