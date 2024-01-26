import React from "react";
import Navbar from "../../components/navbar";
import logo from "../../assets/homebgmain.png";
import Footer from "../../components/footer";
import SurgeryCenter from "../../components/surgery";

const Homepage = () => {
  const data = {
    heading1: "WELCOME TO ELITE CARE",
    heading2: "ENHANCE YOUR BEAUTY ",
    heading3: "WITH PLASTIC SURGERY",
    image: logo,
    button: "EXPLORE NOW",
  };
  return (
    <div>
      <Navbar data={data} />
          {/* <SurgeryCenter/> */}
      <Footer />
    </div>
  );
};

export default Homepage;
