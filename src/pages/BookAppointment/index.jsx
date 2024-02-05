import React from "react";
import Navbar from "../../components/navbar";
import logo from "../../assets/BookAppointment.png";
import AppointmentForm from "./appointmentForm";
import Footer from "../../components/footer/index";

const BookAppointment = () => {
  const data = {
    heading1: null,
    heading2: "BOOK APPOINTMENT",
    heading3: null,
    image: logo,
    button: null,
    height: "675px",
    imgTop: "34%",
  };
  return (
    <div>
      <Navbar data={data} />
      <AppointmentForm />
      <Footer />
    </div>
  );
};

export default BookAppointment;
