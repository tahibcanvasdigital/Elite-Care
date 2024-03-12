import styles from "./style.module.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import Retangleblog1 from "../../../assets/Rectangle1.png";
import Retangleblog2 from "../../../assets/Rectangle2.png";
import Retangleblog3 from "../../../assets/Rectangle3.png";
import PaginationComponent from "../../../components/pagination";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getblogs } from "../../../global/features/Dashboard/blogsSlice/GetBlogs";
import Loader from "../../../components/Loader";

const BlogPage = () => {
  const date = new Date();
  const todaydate = date.getDay();
  const todaymonth = date.getMonth();
  const todayyeaer = date.getFullYear();
  const all = `${todaydate} , ${todaymonth} ,  ${todayyeaer}`;

  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.blogs);
  const [currentpage, setCurrentpage] = useState(1);
  const [limit, setLimit] = useState(3);

  const records = data?.data?.results?.results?.slice();

  useEffect(() => {
    const paginate = { limit: limit, page: currentpage };
    dispatch(getblogs(paginate));
  }, [currentpage, dispatch, limit]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-8">
          <div className="row">
            {loading ? (
              <Loader />
            ) : (
              records?.map((items, index) => {
                const months = [
                  "JAN",
                  "FEB",
                  "MAR",
                  "APR",
                  "MAY",
                  "JUN",
                  "JUL",
                  "AUG",
                  "SEP",
                  "OCT",
                  "NOV",
                  "DEC",
                ];
                const createdDate = new Date(items?.createdAt);
                const day = createdDate.getDate();
                const month = months[createdDate.getMonth()];
                const year = createdDate.getFullYear();

                const finalDate = `${
                  day < 10 ? "0" + day : day
                } ${month} ${year}`;
                return (
                  <div key={index} className="col-12">
                    <div className={styles.textblog}>
                      <h6>
                        <SlCalender style={{ margin: "0px 20px" }} />
                        {finalDate}
                      </h6>
                      <h1>{items.title}</h1>
                      <p>{items?.description?.slice(0,500)}</p>
                      <button className="btn">
                        Read More <HiArrowLongRight size={28} />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <PaginationComponent
            totalPost={data?.data?.count}
            postPerPage={limit}
            setCurrentPage={setCurrentpage}
            currentPage={currentpage}
          />
        </div>
        <div className="col-12 col-md-4 col-lg-4">
          <div className={styles.searchbar}>
            <input type="search" placeholder=" search Here " />
            <HiArrowLongRight size={28} />
          </div>
          <div className={styles.category}>
            <div className="mx-3">
              <h4>CATEGORY</h4>
              <ul>
                <li>
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Plactic Surgery</span>
                    </div>
                    <div>
                      <span>(14)</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Liposaction</span>
                    </div>
                    <div>
                      <span>(12)</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Breat Implant</span>
                    </div>
                    <div>
                      <span>(18)</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Pender Unity</span>
                    </div>
                    <div>
                      <span>(8)</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <div>
                      {" "}
                      <span>Non surgical</span>
                    </div>
                    <div>
                      {" "}
                      <span>(28)</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>Nose Reshaping</span>
                    </div>
                    <div>
                      <span>(9)</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.blog}>
            <h4>LATEST FROM BLOG</h4>
            <div className={styles.latestblog}>
              <div className={styles.imgagesdiv}>
                <img src={Retangleblog1} />
              </div>
              <div>
                <h6>Recapture the beauty self-confidence </h6>
                <SlCalender />
                <span>{all}</span>
              </div>
            </div>
            <div className={styles.latestblog}>
              <div className={styles.imgagesdiv}>
                <img src={Retangleblog2} />
              </div>
              <div>
                <h6>when you feel good we feel good </h6>
                <SlCalender />
                <span>{all}</span>
              </div>
            </div>
            <div className={styles.latestblog}>
              <div className={styles.imgagesdiv}>
                <img src={Retangleblog3} />
              </div>
              <div>
                <h6>Refresh your image to beauty </h6>
                <SlCalender />
                <span>{all}</span>
              </div>
            </div>
          </div>
          <div className={styles.populartag}>
            <h4>POPULAR TAG</h4>
            <div>
              <span>
                <Link to="#">Cosmetic </Link>
              </span>
              <span>
                <Link to="#">Non surgical </Link>
              </span>
              <span>
                <Link to="#">Medical </Link>
              </span>
              <span>
                <Link to="#">Brest implent </Link>
              </span>
              <span>
                <Link to="#">Surgery </Link>
              </span>
              <span>
                <Link to="#">Medical </Link>
              </span>
              <span>
                <Link to="#">Brest implent </Link>
              </span>
              <span>
                <Link to="#">Surgery </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
