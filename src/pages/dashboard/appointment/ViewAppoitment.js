import React from 'react'
import Headers from '../header/Headers'
import Sidebar from '../sidebar/Sidebar'
import Style from './Style.module.css'
import img from "../../../assets/Dentist.png";

const ViewAppoitment = () => {
  return (
    <div className="d-flex">
    <div>
      <Sidebar />
    </div>
    <div className="w-100">
      <Headers/>
      <div className='mx-4'>
    <h1> ViewAppoitment </h1>
    <div className={`container d-flex ${Style.profilecard}`}>
              <div className={Style.profile}>  <img src={img} width={250} height={250} alt="img" /></div>
              <div className={Style.profiletext}>
                <div className="">
                  <h5>Name :</h5>
                  <p>John</p>
                  
                </div>
                <div>
                  <h5>Email :</h5>
                  <p>John@gmail.com</p>
                  
                </div>
                <div>
                  <h5>Gender : </h5>
                  <p>Male</p>
                  
                </div>
             
               
              
              </div>
            </div>
    </div>
    </div>
  </div>
  )
}

export default ViewAppoitment