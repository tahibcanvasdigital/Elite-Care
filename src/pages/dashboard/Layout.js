import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Style from './style.module.css'

const Layout = () => {
  const { screensize } = useSelector((state) => state.screen);

  return (
    <div className={`container-fluid   ${Style.padd}`}>
      <div className="">
        <Sidebar />
      </div>
      <div className={Style.abc}>
        <div className={Style.header}>Header</div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
