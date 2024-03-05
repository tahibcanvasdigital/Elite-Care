import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Headers from '../header/Headers'
import Style from './Style.module.css'
import img from "../../../assets/Dentist.png";

const ViewContact = () => {
  return (
    <div className="d-flex">
    <div className={Style.sidecolor} >
      <Sidebar />
    </div>
    <div className="w-100">
      <Headers/>
      <div className='mx-4'>
    <h1> ViewContact </h1>
    <div className={`container `}>
              <div className="row align-items-center">
                <div className="col col-md-7">
                  <div class={`row justify-content-between align-items-center g-2 ${Style.profilecard}` }>
                  <div className="col col-md-5">
                  <div className={Style.profile}>
                {" "}
                <img src={img} width={250} height={250} alt="img" />
              </div>
                  </div>
                  <div className="col col-md-5">
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
            
          
            </div>
    </div>
    </div>
  </div>
  )
}

export default ViewContact