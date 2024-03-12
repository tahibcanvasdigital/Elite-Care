import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import PaginationComponent from "../../../components/pagination";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesApi,selectCategory } from "../../../global/features/Dashboard/categorySlice/getAllCategories";
import Loader from "../../../components/Loader";

const Category = () => {
  const dispatch = useDispatch();
  const [currentpage, setCurrentpage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data, isLoading } = useSelector(selectCategory);

  useEffect(() => {
    const paginate = { limit: limit, page: currentpage };

    dispatch(getAllCategoriesApi(paginate));
  }, [currentpage, dispatch, limit]);

  const records = data?.results?.results.slice();

  return (
    <div className="d-flex">
      <div className={style.sidecolor}>
        <Sidebar />
      </div>
      <div className="w-100">
        <Headers />
        <div className={style.btn_doc}>
          <Link to={"/elite-care/dashboard/addcategory"}>
            <button>Add Blog Category</button>
          </Link>
        </div>
        <div className="container mt-4   ">
          <h1> Blog Category </h1>
          <table
            style={{ width: "100%" }}
            className={`table  table-responsive table-striped table-bordered table-hover ${style.tables} }`}
          >
            <thead>
              <tr>
                <th scope="col">S .NO</th>
                <th scope="col">NAME</th>
              </tr>
            </thead>

            {isLoading ? (
              <Loader />
            ) : (
              records?.map((item, index) => (
                <tbody key={index}>
                  <tr>
                    <th scope="row">
                      {currentpage * limit - limit + (index + 1)}
                    </th>
                    <td>{item.name}</td>
                  </tr>
                </tbody>
              ))
            )}
          </table>
          <div>
            <PaginationComponent
              totalPost={data?.count}
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

export default Category;
