import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Headers from "../header/Headers";
import Sidebar from "../sidebar/Sidebar";
import PaginationComponent from "../../../components/pagination";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getblogs } from "../../../global/features/Dashboard/blogsSlice/GetBlogs";
import Loader from '../../../components/Loader'

const Blogs = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(getblogs());
  }, [dispatch]);

  const [currentpage, setCurrentpage] = useState(1);
  const recordPage = 10;
  const lastindex = currentpage * recordPage;
  const firstindex = lastindex - recordPage;
  const records = data?.data?.results.slice(firstindex, lastindex);

  const numberpages = Math.ceil(data?.length / recordPage);

  const numbers = Array.from({ length: numberpages }, (_, index) =>
    (index + 1).toString().padStart(2, "0")
  );

  return (
    <div className="d-flex ">
      <div className={styles.sidecolor}>
        <Sidebar />
      </div>
      <div className="w-100">
        <Headers />
        <div className={styles.btn_doc}>
          <Link to={"/elite-care/dashboard/addblogs"}>
            <button>Add Blogs</button>
          </Link>
        </div>
        {
           loading ? <Loader/> :  <div className="container mt-4   ">
           <h1> Blogs </h1>
           <table
             style={{ width: "100%" }}
             className={`table  table-responsive table-striped table-bordered table-hover ${styles.tables} }`}
           >
             <thead>
               <tr>
                 <th scope="col">S .NO</th>
                 <th scope="col">Title</th>
                 <th scope="col">Description</th>
                 <th scope="col">Category</th>
                 <th scope="col">Time</th>
                 <th scope="col">VIEW</th>
               </tr>
             </thead>
             {records?.map((item, index) => (
               <tbody key={index}>
                 <tr>
                   <th scope="row">{index + 1}</th>
                   <td>{item.title}</td>
                   <td>{item.description}</td>
                   <td>{item.category.name}</td>
                   <td>{item.createdAt}</td>
                   <td>
                     <Link to={`/elite-care/dashboard/viewblogs/${item._id}`}>
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
        }
      
      </div>
    </div>
  );
};

export default Blogs;
