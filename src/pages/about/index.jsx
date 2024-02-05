import React from "react";
import Navbar from "../../components/navbar";
import Styles from "./style.module.css";
import logo from "../../assets/about-banner.png";
import OurMission from "./ourMission";
import Footer from "../../components/footer";
import Services from "./services";
import Testimonal from "../home/testimonal";
import treatment1 from "../../assets/treatment1.png";
import treatment2 from "../../assets/treatment2.png";
import treatment3 from "../../assets/treatment3.png";
import treatment4 from "../../assets/treatment4.png";
import Portfolio from "../../components/portfolio";
import ImageComparison from "../../components/imageComparison";
// Image Compare Imgs
import beforeImg from "../../assets/dentistBefore.png";
import afterImg from "../../assets/dentistAfter.png";
const About = () => {
  const data = {
    heading1: null,
    heading2: "BOOK APPOINTMENT",
    heading3: null,
    image: logo,
    button: null,
    height: "675px",
    imgTop: "34%",
  };
  const datatreatment = {
    heading1: "TREATMENT",
    heading2: "OUR TREATMENT",
    image1: treatment1,
    image2: treatment2,
    image3: treatment3,
    image4: treatment4,
  };
  const beforeAfterImgs = {
    img1: beforeImg,
    img2: afterImg,
  };
  return (
    <>
      <Navbar data={data} />
      <OurMission />
      <Services />
      <Testimonal />
      <Portfolio dataportfolio={datatreatment} />
      <ImageComparison beforeAfterImgs={beforeAfterImgs} />
      <Footer />
    </>
  );
};

export default About;
