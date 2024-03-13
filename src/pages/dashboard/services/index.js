import useSWR from "swr";
import React, { useState } from "react";
import Style from "../style.module.css";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import PaginationComponent from "../../../components/pagination";
import Loader from "../../../components/Loader";
import { constants } from "../../../global/constants";

const Service = () => {
  const [currentpage, setCurrentpage] = useState(1);
  const recordPage = 5;
  const lastindex = currentpage * recordPage;
  const firstindex = lastindex - recordPage;
  const [limit, setLimit] = useState(10);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `${constants.baseUrl}api/services?limit=${limit}&page=${currentpage}`,
    fetcher
  );
  const serviceData = data?.data?.results?.results;
  const numberpages = Math.ceil(data?.data.length / recordPage);

  const numbers = Array.from({ length: numberpages }, (_, index) =>
    (index + 1).toString().padStart(2, "0")
  );

  return (
    <div className="d-flex ">
      <div className={Style.sidecolor}>
        <Sidebar />
      </div>
      <div className="w-100">
        <Headers />
        <div className={Style.btn_doc}>
          <Link to={"/elite-care/dashboard/addservice"}>
            <button>Add Service</button>
          </Link>
        </div>
        <div className="container mt-4   ">
          <h1> Services </h1>

          <table
            style={{ width: "100%" }}
            className={`table  table-responsive table-striped table-bordered table-hover ${Style.tables} }`}
          >
            <thead>
              <tr>
                <th scope="col">S.NO</th>
                <th scope="col">SERVICE NAME</th>
                <th scope="col">DESCRIPTION</th>
                <th scope="col">PRICE</th>
              </tr>
            </thead>
            {isLoading ? (
              <div className={Style.loader}>
                {" "}
                <Loader />
              </div>
            ) : (
              serviceData &&
              serviceData.map((item, index) => {
                return (
                  <tbody>
                    <tr key={item._id}>
                      <th scope="row">
                        {currentpage * limit - limit + (index + 1)}
                      </th>
                      <td>{item.serviceName}</td>
                      <td>{item.description}</td>
                      <td>${item.price}</td>
                    </tr>
                  </tbody>
                );
              })
            )}
          </table>
          <div>
            {
              isLoading ? "": <PaginationComponent
              totalPost={data?.data?.count}
              postPerPage={limit}
              setCurrentPage={setCurrentpage}
              currentPage={currentpage}
            />
            }
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
