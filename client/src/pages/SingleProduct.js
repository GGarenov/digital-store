import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";

const SingleProduct = () => {
  const props = {
    width: 600,
    height: 500,
    zoomWidth: 100,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    scale: 0.3,
    zoomPosition: "right",
    offset: { vertical: 0, horizontal: 50 },
  };

  const orderedProduct = true;
  return (
    <>
      <Meta title="Single Product" />
      <BreadCrumb title="Single Product" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="img-fluid"
                  alt="product"
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="img-fluid"
                  alt="product"
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="img-fluid"
                  alt="product"
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="img-fluid"
                  alt="product"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">Kids Headphones Bulk 10 Pack Multi Colored For Students</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$100</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                  <p className="mb-0 t-review">(2 Reviews)</p>
                </div>
                <a className="review-button" href="#review">
                  Write a review
                </a>
              </div>
              <div className="py-3">
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Type :</h3> <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Brand :</h3> <p className="product-data">Havells</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Category :</h3> <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Tags :</h3> <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center">
                  <h3 className="product-heading">Available :</h3> <p className="product-data">In stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color :</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "50px" }}
                    ></input>
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0">Add to Cart</button>
                    <button className="button signup">Buy it now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="/">
                      <TbGitCompare className="fs-5 mb-2" />
                      Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="/">
                      <AiOutlineHeart className="fs-5 mb-2" />
                      Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>{" "}
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br /> We ship all over Bulgaria within
                    <b>3-5 days!</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                Nekvo opisanie tuka description tova onova da e malko po-dulgo de da subere nqkvo mqsto znam li gledam
                tuka 3-4 reda napraveni podrobno opisanie na produkta ma realno 2-3 izrecheniq da ima tam za fon bratle.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper2">
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
                      <a className="text-dark text-decoration-underline" href="/">
                        Write a review
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="review-form py-4">
                <h4 id="review">Write a review</h4>
                <div>
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
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Popular products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
