import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Meta title="Forgot Password" />
      <BreadCrumb title="Forgot Password" />

      <div className="forgot-password-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset password</h3>
              <p className="text-center mb-3">
                Enter your email address and we will send you a link to reset your password.
              </p>
              <form className="d-flex flex-column gap-15" action="">
                <div className="mt-3">
                  <input type="email" name="email" className="form-control" placeholder="email" />
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                    <button className="button border-0">Submit</button>
                    <Link to="/login" className="button text-white">
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
