import React from "react";
import Navbar from "../../components/navbar";
import styles from "./style.module.css";
import logo from "../../assets/transportation-home.png";
import TransportationCard from "./transporationCard";
const Transportation = () => {
  const data = {
    h1: null,
    h2: "TRANSPORTATION",
    h3: null,
    image: logo,
    button: null,
    height: "675px",
    imgTop: "190px",
  };
  return (
    <>
      <Navbar data={data} />
      <TransportationCard />
    </>
  );
};

export default Transportation;
