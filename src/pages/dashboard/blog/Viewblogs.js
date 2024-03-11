import React, { useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import Headers from "../header/Headers";
import Loader from "../../../components/Loader";
import styles from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";


import { useParams } from "react-router-dom";
import {Viewblog} from "../../../global/features/Dashboard/blogsSlice/Viewblog";

const Viewblogs = () => {
  const dispatch = useDispatch();
  const { id } = useParams()
  console.log(id)
  const { data, loading } = useSelector((state) => state.viewblogs);
  console.log(
    );
  useEffect(() => {
    dispatch(Viewblog(id));
  }, [dispatch]);
  return (
    <div className="d-flex">
      <div className={styles.sidecolor}>
        <Sidebar />
      </div>
      <div className="w-100">
        <Headers />
        <div className="mx-4">
          <h1> View blogs </h1>
          {loading ? (
            <Loader />
          ) : (
            <div className={`container `}>
              <div className="row align-items-center">
              <div className="col col-md-12">
                  <div
                    class={`row justify-content-between align-items-center  ${styles.profilecard}`}
                  >
                    <div className="col col-md-6 ">
                      <div className="">
                      <div className={styles.profile}>
                        <img  src={data.data?.image?.imageUrl}/>
                      </div>
                      </div>
                   
                    </div>
                    <div className="col col-md-6 ">
                      <div className={styles.profiletext}>
                        <div className="">
                          <h5>Title :</h5>
                          <p>{data.data?.title}</p>
                        </div>
                        <div>
                          <h5>description :</h5>
                          <p>{data.data?.description}</p>
                        </div>
                        <div>
                          <h5>Gender : </h5>
                          {/* <p>{data.data}</p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Viewblogs;
