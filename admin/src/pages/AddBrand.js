import { React, useEffect } from "react";

import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createBrands } from "../features/brand/brandSlice";
import { resetState } from "../features/bcategory/bcategorySlice";

let schema = yup.object().shape({
  title: yup.string().required("Brand name is Required"),
});

const AddBrand = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newBrand = useSelector((state) => state.brandReducer);
  const { isSuccess, isError, isLoading, createdBrand } = newBrand;
  useEffect(() => {
    if (isSuccess && createdBrand) {
      toast.success("Brand Added Successfullly!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createBrands(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
      }, 3000);
    },
  });
  return (
    <div>
      <h3 className="mb-4 title">Add Brand</h3>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="title"
            onChange={formik.handleChange("title")}
            onBlur={formik.handleBlur("title")}
            val={formik.values.title}
            label="Enter brand name"
            id="brand"
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button className="btn btn-success border-0 rounded-3" type="submit">
            Add Brand
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBrand;
