import React, { useState } from "react";
import Headers from "../header/Headers";
import Sidebar from "../sidebar/Sidebar";
import Style from "../style.module.css";
import { Link } from "react-router-dom";
import PaginationComponent from "../../../components/pagination";
import useSWR from "swr";
import { constants } from "../../../global/constants";
import Loader from "../../../components/Loader";
const Appointment = () => {
  // const data = [
  //   {
  //     id: "1",
  //     name: "john",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     name: "john",
  //     id: "2",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "3",
  //     name: "john",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "4",
  //     name: "aalex",
  //     email: "aalex@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },

  //   {
  //     id: "5",
  //     name: "aalex",
  //     email: "aalex@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "6",
  //     name: "aaalexli",
  //     email: "aalex@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },

  //   {
  //     id: "7",
  //     name: "aalex",
  //     email: "ahed@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "8",
  //     name: "john",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },

  //   {
  //     id: "9",
  //     name: "john",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "10",
  //     name: "john",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "11",
  //     name: "john",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     name: "john",
  //     id: "12",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "13",
  //     name: "john",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "14",
  //     name: "aalex",
  //     email: "aalex@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },

  //   {
  //     id: "15",
  //     name: "aalex",
  //     email: "aalex@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "16",
  //     name: "aaalexli",
  //     email: "aalex@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },

  //   {
  //     id: "17",
  //     name: "aalex",
  //     email: "ahed@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  //   {
  //     id: "18",
  //     name: "john",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },

  //   {
  //     id: "19",
  //     name: "john",
  //     email: "john@gmail.com",
  //     service: ["abc", "acbc", "adad"],
  //     time: "12:00 oClock",
  //   },
  // ];

  const [currentpage, setCurrentpage] = useState(1);
  const [limit, setLimit] = useState(10);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `${constants.baseUrl}api/appoinment?page=${currentpage}limit=${limit}`,
    fetcher
  );
  const appointmentData = data?.data?.results?.results;
  return (
    <div className="d-flex">
      <div className={Style.sidecolor}>
        <Sidebar />
      </div>
      <div className="w-100">
        <Headers />
        <div className="mx-4">
          <h1> Appointment</h1>
          <div className="container mt-4   ">
            <table
              style={{ width: "100%" }}
              className={`table  table-responsive table-striped table-bordered table-hover ${Style.tables} }`}
            >
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">NAME</th>
                  <th scope="col">EMAIL</th>
                  <th scope="col">SERVICE</th>
                  <th scope="col">CREATED AT</th>

                </tr>
              </thead>
              {isLoading ? (
                <Loader />
              ) : (
                appointmentData?.map((item, index) => {
                  const timestamp = item?.createdAt;
                  const dateOnly = new Date(timestamp)
                    .toISOString()
                    .slice(0, 10);
                  return (
                    <>
                      <tbody key={index}>
                        <tr>
                          <th scope="row">{(currentpage * limit) - limit + (index + 1)}</th>
                          <td>{item?.name}</td>
                          <td>{item?.email}</td>
                          <td>{item?.serviceOffered}</td>
                          <td>{dateOnly}</td>
                          
                        </tr>
                      </tbody>
                    </>
                  );
                })
              )}
            </table>
            <PaginationComponent
              totalPost={data?.data?.count}
              postPerPage={limit}
              setCurrentPage={setCurrentpage}
              currentPage={currentpage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
