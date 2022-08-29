import React from "react";
import "./Blog.css";
import bloog3 from "./bloog3.jpg";
import bloog2 from "./bloog2.jpg";
import Articles from "./Articles";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Blog = () => {
  return (
    <section
      className="max-wrapper who-wrapper pb-5"
      style={{ color: "white" }}
    >
      {/* 99 */}
      <Header />
      <Articles />
      <Footer />
    </section>
  );
};

export default Blog;
