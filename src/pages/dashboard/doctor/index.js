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

const Doctors = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectdoctor);

  console.log(data);
  useEffect(() => {
    dispatch(getdoctors());
  }, [dispatch]);
  const [currentpage, setCurrentpage] = useState(1);
  const recordPage = 10;
  const lastindex = currentpage * recordPage;
  const firstindex = lastindex - recordPage;
  const records = data?.data.data?.results?.slice();

  const numberpages = Math.ceil(data?.length / recordPage);

  const numbers = Array.from({ length: numberpages }, (_, index) =>
    (index + 1).toString().padStart(2, "0")
  );

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
        <div className="container mt-4   ">
          <h1> Doctors </h1>
          <table
            style={{ width: "100%" }}
            className={`table table-responsive table-striped table-bordered table-hover ${Style.tables} }`}
          >
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Service</th>
                <th scope="col">Time</th>
                <th scope="col">VIEW</th>
              </tr>
            </thead>
            {records?.map((item, index) => (
              <tbody key={index}>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.serviceOffered[0]?.serviceName}</td>
                  <td>{item?.availableTime}</td>
                  <td>
                    <Link to={`/elite-care/dashboard/viewdoctor/${item._id}`}>view</Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>

          <PaginationComponent numberpages={numberpages} numbers={numbers} setCurrentpage={setCurrentpage} currentpage={currentpage} />

        </div>
      </div>
    </div>
  );
};

export default Doctors;
