import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import productcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-2.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
  const { grid, data } = props;
  console.log("In ProductCard: ", data);

  let location = useLocation();

  return (
    <>
      {Array.isArray(data) &&
        data.map((item, index) => (
          <div
            key={index}
            className={`${
              location.pathname === "/store" ? `gr-${grid}` : "col-3"
            }`}
          >
            <div className="product-card position-relative">
              <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-transperant">
                  <img src={wish} alt="wishlist" />
                </button>
              </div>
              <Link
                to={`${
                  location.pathname === "/"
                    ? "product/" + item.slug
                    : location.pathname === "/product/:id"
                    ? "/product/" + item.slug
                    : item.slug
                }`}
              >
                <div className="product-image">
                  <img
                    src={item.images[0].url}
                    className="img-fluid"
                    alt="product"
                  />
                  <img src={watch2} className="img-fluid" alt="product" />
                </div>
                <div className="product-details">
                  <h6 className="brand">{item.brand}</h6>
                  <h5 className="product-title">{item.title}</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value={Number(item.totalrating)}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  ,
                  <p
                    className={`description ${
                      grid === 12 ? "d-block" : "d-none"
                    }`}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                  <p className="price">${item.price}</p>
                </div>
              </Link>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transperant">
                    <img src={addcart} alt="cart" />
                  </button>
                  <button className="border-0 bg-transperant">
                    <img src={productcompare} alt="compare" />
                  </button>
                  <button className="border-0 bg-transperant">
                    <img src={view} alt="view" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProductCard;
