import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const SignUp = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Create Account</h3>
              <form className="d-flex flex-column gap-15" action="">
                <div className="mt-3">
                  <input type="name" name="firstName" className="form-control" placeholder="Name" />
                </div>

                <div className="mt-3">
                  <input type="email" name="email" className="form-control" placeholder="email" />
                </div>
                <div className="mt-3">
                  <input type="tel" name="mobile" className="form-control" placeholder="Mobile number" />
                </div>
                <div>
                  <input type="password" name="password" className="form-control" placeholder="password" />
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-20 align-items-center">
                    <button className="button border-0">Create</button>
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

export default SignUp;
