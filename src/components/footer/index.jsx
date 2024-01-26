import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { MdEmail, MdLocationPin } from "react-icons/md";
import Styles from './style.module.css'
import image1 from "../../assets/pexels-misolo-cosmetic-6847836.jpg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={` container-fluid position-relative  ${Styles.imgfooter}`} >
      {/* <div className={`position-absolute   z-n1 `}>
        <img src={image1} alt="" className=""  />
      </div> */}
      <div className="container-fluid text-white   p-4  ">
        <div className="row justify-content-center ">
          <div className="col-12 col-md-4   ">
            <div className="mx-4">
              <h2>Contact</h2>
              <div className="row pt-4 border-top ">
                <div className="col-2 col-md-1 ">
                  <div className=" d-flex flex-column gap-3 ">
                    <IoCall size={20} />
                    <MdEmail size={20} />
                    <MdLocationPin size={20} />
                  </div>
                </div>
                <div className="col-3 col-md-3">
                  <h4>Call Us</h4>

                  <h4>Email</h4>
                  <h4>Address</h4>
                </div>
                <div className="col-7 col-md-8">
                  <p>500520520</p>
                  <p>Genduade@gmail.com</p>
                  <p>3763 Harbor Light Road 94000 Zip code california</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2  ">
            <div className="mx-4">
              <h2>QUICK LINK</h2>
              <div className="pt-4 border-top">
                <ul className={Styles.ul}>
                  <li>
                    <Link to={'/'}> Home </Link>
                  </li>
                
                  <li>
                     <Link to={'/'}> About Us </Link>
                  </li>
                  <li>
                     <Link to={'/'}> Services Offered </Link>
                  </li>
                  <li>
                     <Link to={'/'}> Surgical Aesthetics </Link>
                  </li>
                  <li>
                     <Link to={'/'}> Non - Surgical Assthetics </Link>
                  </li>
                  <li>
                     <Link to={'/'}> Dentist </Link>
                  </li>
                  <li>
                     <Link to={'/'}> For Men  </Link>
                  </li>
                  <li>
                     <Link to={'/'}> Transportation </Link>
                  </li>
                  <li>
                     <Link to={'/'}> Blog </Link>
                  </li>
                  <li>
                     <Link to={'/'}> Contact Us </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 ">
            <div className="mx-4 ">
              <h2>ABOUT US</h2>
              <div className="pt-4 border-top">
                <p className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                  saepe unde atque, sequi assumenda sed quia perspiciatis cum
                  iusto! Hic, eum molestias deleniti quis sequi nesciunt ratione
                  officiis qui autem mollitia neque iure voluptate fugiat
                  necessitatibus inventore
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3   ">
            <div className="mx-4">
              <h2>NEWSLETTER</h2>
              <div className=" flex pt-4 border-top">
                <div className=" border border-0 ">
                  <div className="position-relative" >
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className="p-3 border border-1 w-75  text-white rounded-md bg-transparent "
                    />
                    <IoMdArrowForward
                      className="bg-white text-warning border p-2 border-1 rounded-md mb-1 position-absolute   "
                      size={60}
                    />
                  </div>
                </div>
                <h3 className="pt-3"> FOLLOW US ON </h3>
                <div className="d-flex pt-3 gap-4">
                  <div>
                    <FaFacebook size={30} />
                  </div>
                  <div>
                    <FaSquareTwitter size={30} />
                  </div>
                  <div>
                    <ImInstagram size={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
      <div className="d-flex justify-content-between mx-4 text-white  border-top pt-4">
        <div>
          <p>2024 Copy right ELite Care All Rights Reserved </p>
        </div>
        <div>
          <p>Terms and condition | Privacy Policy</p>
        </div>
      </div>
      </div>
     
    
   
    </div>
  );
};

export default Footer;
{
  /* <div className="  text-white bg-black gap-10  p-10 grid xl:grid-cols-4 sm:grid-cols-2 xsm:grid-cols-1 ">
     
      
   
    
    </div> */
}
