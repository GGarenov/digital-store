import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";

const Store = () => {
  return (
    <>
      <Meta title={"Store"} />
      <BreadCrumb title="Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title"> Shop by Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title"> Filter By</h3>
                <div>
                  <h5 className="sub-title">Available</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="" />
                      <label className="form-check-label" htmlFor="">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="" />
                      <label className="form-check-label" htmlFor="">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="To" />
                      <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <ul className="colors">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color-1" />
                      <label className="form-check-label" htmlFor="color-1">
                        S (2)
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="color-2" />
                      <label className="form-check-label" htmlFor="color-2">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title"> Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Tv</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Gaming</span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title"> Random products</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-75">
                      <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                    </div>
                    <div className="w-75">
                      <h5>Nekuv text tuka da zapulnim mqstoto</h5>
                      <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                      <b>$300</b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-75">
                      <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                    </div>
                    <div className="w-75">
                      <h5>Nekuv text tuka da zapulnim mqstoto</h5>
                      <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                      <b>$300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
