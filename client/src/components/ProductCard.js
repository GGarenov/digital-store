import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
            <img src="images/watch-2.avif" className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">Imeto na produkta</h5>
            <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />,
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Opisanieto na produkta bratle gledai da e dulgo kakto trqbva s vsi4ki harakteristiki primerno ne znam.
            </p>
            <p className="price">$200</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/add-cart.svg" alt="cart" />
              </Link>
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
            <img src="images/watch-2.avif" className="img-fluid" alt="product" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">Imeto na produkta</h5>
            <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />,
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Opisanieto na produkta bratle gledai da e dulgo kakto trqbva s vsi4ki harakteristiki primerno ne znam.
            </p>
            <p className="price">$200</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/add-cart.svg" alt="cart" />
              </Link>
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
