import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import * as Yup from "yup";
let schema = Yup.object().shape({
  title: Yup.string()
    .email("Title should be valid bratle")
    .required("Email e zaduljitelen"),
  description: Yup.string().required("Description e zadaljitelen"),
});

const AddProduct = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  const [desc, setDesc] = useState();
  const handleDesc = (e) => {
    setDesc(e);
  };
  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Enter Product Title"
            name="title"
            onChange={formik.handleChange("title")}
            onBlur={formik.handleBlur("title")}
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <div className="mb-3">
            <ReactQuill
              theme="snow"
              value={desc}
              onChange={(evt) => {
                handleDesc(evt);
              }}
            />
          </div>
          <CustomInput type="number" label="Enter Product Price" />
          <select name="" className="form-control py-3 mb-3" id="">
            <option value="">Select Category</option>
          </select>
          <select name="" className="form-control py-3 mb-3" id="">
            <option value="">Select Brand</option>
          </select>
          <select name="" className="form-control py-3 mb-3" id="">
            <option value="">Select Color</option>
          </select>
          <CustomInput type="number" label="Enter Kolichestvo li kvo" />

          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
