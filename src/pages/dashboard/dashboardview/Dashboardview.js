import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";

const Dashboardview = () => {
  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-100">
        <Headers/>
        <div className='mx-4'>
      <h1> DashboardView </h1>
      </div>
      </div>
    </div>
  );
};

export default Dashboardview;
