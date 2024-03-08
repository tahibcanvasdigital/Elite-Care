import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import PaginationComponent from "../../../components/pagination";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import { getcategory } from "../../../global/features/Dashboard/categorySlice/Getgcategory";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.category);
  console.log(data.data?.results);
  useEffect(() => {
    dispatch(getcategory());
  }, [dispatch]);
    const [currentpage, setCurrentpage] = useState(1);
    const recordPage = 10;
    const lastindex = currentpage * recordPage;
    const firstindex = lastindex - recordPage;
    const records = data.data?.results?.slice(firstindex, lastindex);

    const numberpages = Math.ceil(data.length / recordPage);

    const numbers = Array.from({ length: numberpages }, (_, index) =>
      (index + 1).toString().padStart(2, "0")
    );
  return (
    <div className="d-flex">
      <div className={style.sidecolor}>
        <Sidebar />
      </div>
      <div className="w-100">
        <Headers />
        <div className={style.btn_doc}>
          <Link to={"/elite-care/dashboard/addcategory"}>
            <button>Add Category</button>
          </Link>
        </div>
        <div className="container mt-4   ">
          <h1> Category </h1>
          <table
            style={{ width: "100%" }}
            className={`table  table-responsive table-striped table-bordered table-hover ${style.tables} }`}
          >
            <thead>
              <tr>
                <th scope="col">S .NO</th>
                <th scope="col">Name</th>
                <th scope="col">VIEW</th>
              </tr>
            </thead>
            {records?.map((item, index) => (
            <tbody key={index}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>
                  <Link to={`/elite-care/dashboard/viewcategory/${item._id}`}>
                    view
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
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

export default Category;
