import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import productcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch2 from "../images/watch-2.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";

const ProductCard = (props) => {
  const { grid, data } = props;
  let location = useLocation();
  const dispatch = useDispatch();

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

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
                  <img
                    onClick={() => {
                      addToWish(item?._id);
                    }}
                    src={wish}
                    alt="wishlist"
                  />
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
                  {item.images && item.images[0] ? (
                    <img
                      src={item.images[0].url}
                      className="img-fluid"
                      alt="product"
                    />
                  ) : (
                    <img src={watch2} className="img-fluid" alt="product" />
                  )}
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
                  <Link
                    to={"/product/" + item?._id}
                    className="border-0 bg-transperant"
                  >
                    <img src={view} alt="view" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProductCard;
