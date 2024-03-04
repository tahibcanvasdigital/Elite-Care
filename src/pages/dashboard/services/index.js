import React, { useState } from "react";
import Style from '../style.module.css'
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import useSWR from 'swr'
import PaginationComponent from "../../../components/pagination";
const Service = () => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('http://localhost:8080/api/services', fetcher)
  const serviceData = data?.data
  console.log(serviceData);

  const [currentpage, setCurrentpage] = useState(1);
  const recordPage = 10;
  const lastindex = currentpage * recordPage;
  const firstindex = lastindex - recordPage;
  // const records = data.slice(firstindex, lastindex);

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
          <Link to={'/elite-care/dashboard/addservice'}>
            <button>Add Service</button>
          </Link>

        </div>
        <div className="container mt-4   ">
          <h1> Services </h1>
          <table style={{ width: '100%' }} className={`table  table-responsive table-striped table-bordered table-hover ${Style.tables} }`}>
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Service Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>

                <th scope="col">VIEW</th>
              </tr>
            </thead>
            {/* {
          records.map((item,index)=>(
          <tbody key={index}>
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.service}</td>
              <td>{item.time}</td>
              <td><Link to={'/elite-care/dashboard/viewservice/14141313'}>view</Link></td>
            </tr>
            </tbody>
          ))
        } */}
            {
              serviceData && serviceData.map((item) => {
                return (
                  <tbody >
                    <tr key={item._id}>
                      <th scope="row">{item._id}</th>
                      <td>{item.serviceName}</td>
                      <td>{item.description}</td>
                      <td>${item.price}</td>
                      <td><Link to={`/elite-care/dashboard/viewservice/${item._id}`}>View</Link></td>
                    </tr>
                  </tbody>
                )
              })
            }
          </table>
          <div>
            <PaginationComponent
              currentpage={currentpage}
              setCurrentpage={setCurrentpage}
              numberpages={numberpages}
              numbers={numbers}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Service;
