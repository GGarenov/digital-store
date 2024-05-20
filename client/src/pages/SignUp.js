import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

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
                <CustomInput
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                />
                <CustomInput
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                />
                <CustomInput
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="email"
                />
                <CustomInput
                  type="tel"
                  name="mobile"
                  className="form-control"
                  placeholder="Mobile number"
                />
                <CustomInput
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
                />

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
