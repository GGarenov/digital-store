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
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
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
                ? "product/:id"
                : location.pathname === "/product/:id"
                ? "/product/:id"
                : ":id"
            }`}
          >
            <div className="product-image">
              <img src={watch} className="img-fluid" alt="product" />
              <img src={watch2} className="img-fluid" alt="product" />
            </div>
            <div className="product-details">
              <h6 className="brand">Havels</h6>
              <h5 className="product-title">Imeto na produkta</h5>
              <ReactStars
                count={5}
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
              />
              ,
              <p
                className={`description ${grid === 12 ? "d-block" : "d-none"}`}
              >
                Opisanieto na produkta bratle gledai da e dulgo kakto trqbva s
                vsi4ki harakteristiki primerno ne znam.
              </p>
              <p className="price">$200</p>
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
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transperant">
              <img src={wishlist} alt="wishlist" />
            </button>
          </div>
          <Link to={`${location.pathname === "/" ? "product/:id" : ":id"}`}>
            <div className="product-image">
              <img src={watch} className="img-fluid" alt="product" />
              <img src={watch2} className="img-fluid" alt="product" />
            </div>
            <div className="product-details">
              <h6 className="brand">Havels</h6>
              <h5 className="product-title">Imeto na produkta</h5>
              <ReactStars
                count={5}
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
              />
              ,
              <p
                className={`description ${grid === 12 ? "d-block" : "d-none"}`}
              >
                Opisanieto na produkta bratle gledai da e dulgo kakto trqbva s
                vsi4ki harakteristiki primerno ne znam.
              </p>
              <p className="price">$200</p>
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
    </>
  );
};

export default ProductCard;
