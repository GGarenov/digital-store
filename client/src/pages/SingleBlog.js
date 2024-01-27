import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";

const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blog" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" /> Back
                </Link>
                <h3 className="title">The best headphones jogging in the park</h3>
                <img src={blog} alt="blog" className="img-fluid w-100 my-4" />
                <p>
                  Tuka sledva dulgo opisanie na produkta, kolko e gotin. Kakvi sa preimushtestvata da go imash ot kude
                  mojesh da si go zakupish. Abe kato cqlo dulag text da ima za zapulvane na mqsto da vidim kak shte
                  izglejda cqlostniq oblik na single blog stranicata.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
