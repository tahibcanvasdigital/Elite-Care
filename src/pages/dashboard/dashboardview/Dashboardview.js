import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import { MdSupervisedUserCircle } from "react-icons/md";
import Styles from "./Style.module.css";
import { FaBriefcaseMedical, FaServicestack, FaUserCheck, FaUserDoctor } from "react-icons/fa6";
import Chart from "../chart";

const Dashboardview = () => {
  const data = [
    {
      title: "Total Doctors",
      path: "elite-care/dashboard/doctors",
      icon: <FaUserDoctor size={24} />,
      details: '12% more thenprevious work',
      totalCount: '10,980'

    },
    {
      title: "Total Services",
      path: "elite-care/dashboard/services",
      icon: <FaServicestack size={24} />,
      details: '12% more thenprevious work',
      totalCount: '10,980'
    },
    {
      title: "Total Users",
      path: "elite-care/dashboard/users",
      icon: <FaUserCheck size={24} />,
      details: '12% more thenprevious work',
      totalCount: '10,980',
    },
    {
      title: "Total Appointments",
      path: "elite-care/dashboard/appointments",
      icon: <FaBriefcaseMedical size={24} />,
      details: '12% more thenprevious work',
      totalCount: '10,980'
    },
  ]
  return (
    <div className="d-flex">
      <div className={Styles.sidecolor}>
        <Sidebar />
      </div>
      <div className={`w-100  ${Styles.widthdiv}`}>
        <Headers />
        <div className="mx-4">
          <h1> DashboardView </h1>
          <div className={`${Styles.maindiv} container`}>
            <div className="row justify-content-between  ">
              {
                data.map((items, index) => (
                  <div key={index} className="col-12 mt-3 col-md-3   ">
                    <div className={Styles.card}>
                      <p>{items.icon}</p>
                      <div className={Styles.text}>
                        <span className={Styles.title}>{items.title}</span>
                        <span className={Styles.count}>{items.totalCount}</span>
                        <span className={Styles.detail}>
                          <span className={Styles.positive}>{items.details}
                          </span>
                        </span>
                      </div>
                    </div>

                  </div>
                ))
              }
            </div>
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardview;
