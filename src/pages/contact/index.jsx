import React from "react";
import Navbar from "../../components/navbar";
import styles from "./style.module.css";
import logo from "../../assets/ContactUs.png";
import ContactForm from "./contactForm";
import Footer from "../../components/footer";
const Contact = () => {
  const data = {
    heading1: null,
    heading2: "CONTACT US",
    heading3: null,
    image: logo,
    button: null,
    height: "675px",
    imgTop: "34%",
  };
  return (
    <div>
      <Navbar data={data} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
