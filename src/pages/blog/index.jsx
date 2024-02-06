import React from "react";
import Navbar from "../../components/navbar";
import styles from "./style.module.css";
import logo from "../../assets/blog-home.png";
import BlogPage from "./blogpage";
const Blog = () => {
  const data = {
    h1: null,
    h2: "BLOG",
    h3: null,
    image: logo,
    button: null,
    height: "675px",
    imgTop: "190px",
  };
  return (
    <>
      <Navbar data={data} />
      <BlogPage />
    </>
  );
};

export default Blog;
