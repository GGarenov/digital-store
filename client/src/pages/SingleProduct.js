import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import ReactImageZoom from "react-image-zoom";

const SingleProduct = () => {
  const props = {
    width: "400",
    height: 250,
    zoomWidth: 500,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  };

  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
      <Meta title="Single Product" />
      <BreadCrumb title="Single Product" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Nekvo opisanie tuka description tova onova da e malko po-dulgo de da subere nqkvo mqsto znam li gledam
                  tuka 3-4 reda napraveni podrobno opisanie na produkta ma realno 2-3 izrecheniq da ima tam za fon
                  bratle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer reviews</h4>
                    <div className="d-flex gap-10 align-items-center">
                      <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  <div>
                    {orderedProduct && (
                      <div>
                        <a className="text-dark text-decoration-underline" href="">
                          Write a review
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="review-form py-4">
                  <h4>Write a review</h4>
                  <div>
                    {" "}
                    <ReactStars count={5} size={24} value={4} edit={true} activeColor="#ffd700" />
                  </div>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input type="text" className="form-control" placeholder="name" />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder="email" />
                    </div>

                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="submit" className="button border-0">
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-3">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Navdeep</h6>
                      <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                    </div>
                    <p className="mt-3">Nekuv dulag text dulag mnogo kolko da e dulag bratle kolkoto moje</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Popular products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
