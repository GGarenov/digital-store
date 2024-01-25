import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">18 Jan, 2024</p>
        <h5 className="title">Nqkuv text za produkta</h5>
        <p className="desc">
          Lorem ipsum poneje ne mi rabotqt nqkoi snipeti shte si go pisha lorem ipsuma samichak bratle kvo da pravq v
          23:30 vecherta v chetvurtak bate...
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
