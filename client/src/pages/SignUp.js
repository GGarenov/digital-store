import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { registerUser } from "../features/user/userSlice";

const signUpschema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .nullable()
    .email("Email should be valid")
    .required("Email is required"),
  mobile: yup.string().required("Mobile number is required"),
  password: yup.string().required("Password is required"),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signUpschema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Create Account</h3>
<<<<<<< HEAD
              <form className="d-flex flex-column gap-15" action="">
=======
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
>>>>>>> front-end
                <CustomInput
                  type="text"
                  name="firstName"
                  placeholder="First Name"
<<<<<<< HEAD
                />
=======
                  value={formik.values.firstName}
                  onChange={formik.handleChange("firstName")}
                  onBlur={formik.handleBlur("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName}
>>>>>>> front-end
                <CustomInput
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
<<<<<<< HEAD
                />
=======
                  value={formik.values.lastName}
                  onChange={formik.handleChange("lastName")}
                  onBlur={formik.handleBlur("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName}
>>>>>>> front-end
                <CustomInput
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="email"
<<<<<<< HEAD
                />
=======
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                {formik.touched.email && formik.errors.email}
>>>>>>> front-end
                <CustomInput
                  type="tel"
                  name="mobile"
                  className="form-control"
                  placeholder="Mobile number"
<<<<<<< HEAD
                />
=======
                  value={formik.values.mobile}
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleBlur("mobile")}
                />
                {formik.touched.mobile && formik.errors.mobile}
>>>>>>> front-end
                <CustomInput
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="password"
<<<<<<< HEAD
                />
=======
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                {formik.touched.password && formik.errors.password}
>>>>>>> front-end

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
