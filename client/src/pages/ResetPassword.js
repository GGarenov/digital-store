import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />

      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset password</h3>
              <form className="d-flex flex-column gap-15" action="">
                <div>
                  <input type="password" name="password" className="form-control" placeholder="password" />
                </div>
                <div>
                  <input
                    type="password"
                    name="confirmpassword"
                    className="form-control"
                    placeholder="Confirm password"
                  />
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-20 align-items-center">
                    <Link className="button text-white border-0">Continue</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ResetPassword;
