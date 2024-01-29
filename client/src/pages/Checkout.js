import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Website name</h3>
                <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    &nbsp; /
                  </ol>
                </nav>
                <h4 className="title">Contact Informaction</h4>
                <p className="user-details">G.Garenov g_garenov@outlook.com</p>
                <form action="" className="d-flex gap-15 flex-wrap justify-content-between">
                  <div className="w-100">
                    <select name="" className="form-control" id="">
                      <option value="" selected disabled>
                        Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" placeholder="First Name" className="form-control" />
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" placeholder="Last Name" className="form-control" />
                  </div>
                  <div className="w-100">
                    <input type="text" placeholder="Address" className="form-control" />
                  </div>
                  <div className="w-100">
                    <input type="text" placeholder="Apartment" className="form-control" />
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" placeholder="City" className="form-control" />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" className="form-control" id="">
                      <option value="" selected disabled>
                        State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" placeholder="Zip Code" className="form-control" />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <BiArrowBack className="mb-2" />
                        Return to Cart
                      </Link>
                      <Link to="/cart" className="button">
                        Continue to Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
