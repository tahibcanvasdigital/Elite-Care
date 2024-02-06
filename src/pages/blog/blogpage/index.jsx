import styles from "./style.module.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { useState } from "react";
import Retangleblog from "../../../assets/blog-page-img.png";
import PaginationComponent from "../../../components/pagination";
// import { HiArrowLongRight } from "react-icons/hi2";

import { SlCalender } from "react-icons/sl";

const BlogPage = () => {
  const date = new Date();
  const todaydate = date.getDay();
  const todaymonth = date.getMonth();
  const todayyeaer = date.getFullYear();
  const all = `${todaydate} , ${todaymonth} ,  ${todayyeaer}`;
  console.log(all);
  const data = [
    {
      Id: 1,
      date: all,
      title: "Beauty can be preserved and we will tell you how improve",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 2,
      date: all,
      title: "Four ways a clean workplace makes employees happy and healthy",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 3,
      date: all,
      title: "How to clean your home faster and more efficiently",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 4,
      date: all,
      title: "Beauty can be preserved and we will tell you how improve",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 5,
      date: all,
      title: "How to clean your home faster and more efficiently",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 6,
      date: all,
      title: "Four ways a clean workplace makes employees happy and healthy",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 7,
      date: all,
      title: "Beauty can be preserved and we will tell you how improve",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 8,
      date: all,
      title: "Beauty can be preserved and we will tell you how improve",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 9,
      date: all,
      title: "How to clean your home faster and more efficiently",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 10,
      date: all,
      title: "Beauty can be preserved and we will tell you how improve",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 11,
      date: all,
      title: "Beauty can be preserved and we will tell you how improve",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 12,
      date: all,
      title: "Four ways a clean workplace makes employees happy and healthy",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
    {
      Id: 13,
      date: all,
      title: "How to clean your home faster and more efficiently",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maiores dolor, obcaecati blanditiis sed iure soluta deleniti sint neque possimus veniam, quos nam numquam consequuntur, praesentium iste temporibus voluptatem dolore!",
    },
  ];
  const [currentpage, setCurrentpage] = useState(1);
  const recordPage = 3;
  const lastindex = currentpage * recordPage;
  const firstindex = lastindex - recordPage;
  const records = data.slice(firstindex, lastindex);

  const numberpages = Math.ceil(data.length / recordPage);

  const numbers = [...Array(numberpages + 1).keys()].slice(1);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-8">
          <div className="row">
            {records.map((items, index) => (
              <div key={index} className="col-12">
                <div className={styles.textblog}>
                  <h6>
                    <SlCalender style={{ margin: "0px 20px" }} />
                    {items.date}
                  </h6>
                  <h1>{items.title}</h1>
                  <p>{items.des}</p>
                  <button className="btn">
                    Read More <HiArrowLongRight size={28} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <PaginationComponent
            currentpage={currentpage}
            setCurrentpage={setCurrentpage}
            numberpages={numberpages}
            numbers={numbers}
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
                    <div>Plactic Surgery</div>
                    <div>(14)</div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <div>Liposaction</div>
                    <div>(12)</div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <div>Breat Implant</div>
                    <div>(18)</div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <div>Pender Unity</div>
                    <div>(8)</div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <div>Non surgical</div>
                    <div>(28)</div>
                  </div>
                </li>
                <li>
                  <div className="d-flex justify-content-between">
                    <div>Nose Reshaping</div>
                    <div>(9)</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.blog}>
            <h4>LATEST FROM BLOG</h4>
            <div className={styles.latestblog}>
              <div>
                <img src={Retangleblog} />
              </div>
              <div>
                <h6>Recapture the beauty self-confidence </h6>
                <SlCalender /> {all}
              </div>
            </div>
            <div className={styles.latestblog}>
              <div>
                <img src={Retangleblog} />
              </div>
              <div>
                <h6>when you feel good we feel good </h6>
                <SlCalender /> {all}
              </div>
            </div>
            <div className={styles.latestblog}>
              <div>
                <img src={Retangleblog} />
              </div>
              <div>
                <h6>Refresh your image to beauty </h6>
                <SlCalender /> {all}
              </div>
            </div>
          </div>
          <div className={styles.populartag}>
            <h4>POPULAR TAG</h4>
            <div>
              <span>
                <a href="#">Cosmetic </a>
              </span>
              <span>
                <a href="#">Non surgical </a>
              </span>
              <span>
                <a href="#">Medical </a>
              </span>
              <span>
                <a href="#">Brest implent </a>
              </span>
              <span>
                <a href="#">Surgery </a>
              </span>
              <span>
                <a href="#">Medical </a>
              </span>
              <span>
                <a href="#">Brest implent </a>
              </span>
              <span>
                <a href="#">Surgery </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
