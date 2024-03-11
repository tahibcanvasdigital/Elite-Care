import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import Style from "../style.module.css";
import { Link } from "react-router-dom";
import PaginationComponent from "../../../components/pagination";

import Loader from "../../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  getcontact,
} from "../../../global/features/Dashboard/contactusSlice/GetContact";

const ContactUs = () => {
  const disptach = useDispatch();
  const { data, loading } = useSelector((state) => state.contactus);
  const [currentpage, setCurrentpage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const paginate = { limit: limit, page: currentpage }

    disptach(getcontact(paginate));
  }, [currentpage, disptach, limit]);
  const recordPage = 10;
  const lastindex = currentpage * recordPage;
  const firstindex = lastindex - recordPage;
  const records = data?.data?.results?.results.slice(firstindex, lastindex);

  return (
    <div className="d-flex">
      <div className={Style.sidecolor}>
        <Sidebar />
      </div>

      {
        <div className="w-100">
          <Headers />

          <div className="mx-4">
            <h1> Contact </h1>
            <div className="container mt-4   ">
              <table
                style={{ width: "100%" }}
                className={`table  table-responsive table-striped table-bordered table-hover ${Style.tables} }`}
              >
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">message</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Subject</th>
                    <th scope="col">VIEW</th>
                  </tr>
                </thead>

                {loading ? (
                  <Loader />
                ) : (
                  records?.map((item, index) => (
                    <tbody key={index}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.message}</td>
                        <td>{item.phone}</td>
                        <td>{item.subject}</td>
                        <td>
                          <Link
                            to={`/elite-care/dashboard/viewcontactus/${item._id} `}
                          >
                            view
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  ))
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
      }
    </div>
  );
};

export default ContactUs;
