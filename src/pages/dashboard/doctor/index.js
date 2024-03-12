import React, { useEffect, useState } from "react";
import Style from "../style.module.css";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import PaginationComponent from "../../../components/pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  getdoctors,
  selectdoctor,
} from "../../../global/features/Dashboard/getdoctorSlice/Getdoctor";
import Loader from "../../../components/Loader";
import useSWR from "swr";
import { constants } from "../../../global/constants";

const Doctors = () => {


  const [currentpage, setCurrentpage] = useState(1);
  let limit = 10;

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const {data, error, isLoading } = useSWR(`${constants.baseUrl}/api/doctor?page=${currentpage}&limit=${limit}`,fetcher)
  const doctorData = data?.data?.results
  console.log("docor",doctorData);


  return (
    <div className="d-flex">
      <div className={Style.sidecolor}>
        <Sidebar />
      </div>
      <div className="w-100">
        <Headers />
        <div className={Style.btn_doc}>
          <Link to={"/elite-care/dashboard/adddoctor"}>
            <button>Add Doctor</button>
          </Link>
        </div>
        <div className="container mt-4">
          <h1> Doctors </h1>
          <table
            style={{ width: "100%" }}
            className={`table table-responsive table-striped table-bordered table-hover ${Style.tables} }`}
          >
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">TIME</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <Loader />
              ) : (
                doctorData?.map((item, index) => {
                  const timestamp = item?.createdAt;
                  const dateOnly = new Date(timestamp)
                    .toISOString()
                    .slice(0, 10);
                  return(
                   
                <tr key={index}>
                  <th scope="row">
                    {currentpage * limit - limit + (index + 1)}
                  </th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>

                  <td>{dateOnly}</td>
                </tr>
              
                  )
                })
              )}
            </tbody>
          </table>

          <PaginationComponent
            totalPost={data?.data?.results?.length}
            postPerPage={doctorData?.length}
            setCurrentPage={setCurrentpage}
            currentPage={currentpage}
          />
        </div>
      </div>
    </div>
  );
};

export default Doctors;
