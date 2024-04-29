import React, { useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";
let schema = Yup.object().shape({
  title: Yup.string()
    .email("Title should be valid bratle")
    .required("Title e zaduljitelen"),
  description: Yup.string().required("Description e zadaljitelen"),
  price: Yup.number().required("Price e zaduljitelen"),
  brand: Yup.string().required("Brand is zaduljitelen"),
  category: Yup.string().required("Category e zaduljitelen"),
  tags: Yup.string().required("Tags e zaduljitelen"),
  color: Yup.array()
    .min(1, "Pick at least one color")
    .required("Color is Required"),
  quantity: Yup.number().required("Quantity is Required"),
});

const AddProduct = () => {
  const dispatch = useDispatch();
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    dispatch(getBrands());
  }, [brand]);

  const brandState = useSelector((state) => state.brandReducer.brands);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      tags: "",
      color: "",
      quantity: "",
      images: "",
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
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <CustomInput
            type="text"
            label="Enter Product Title"
            name="title"
            onChange={formik.handleChange("title")}
            onBlur={formik.handleBlur("title")}
            val={formik.values.title}
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <div className="">
            <ReactQuill
              theme="snow"
              name="description"
              onChange={formik.handleChange("description")}
              onBlur={formik.handleBlur("description")}
              value={formik.values.description}
            />
            <div className="error">
              {formik.touched.description && formik.errors.description}
            </div>
          </div>
          <CustomInput
            type="number"
            label="Enter Product Price"
            name="description"
            onChange={formik.handleChange("price")}
            onBlur={formik.handleBlur("price")}
            value={formik.values.price}
          />
          <div className="error">
            {formik.touched.price && formik.errors.price}
          </div>
          <select
            name="brand"
            onChange={formik.handleChange("brand")}
            onBlur={formik.handleBlur("brand")}
            value={formik.values.brand}
            className="form-control py-3 mb-3"
            id=""
          >
            <option value="">Select Brand</option>
            {brandState.map((i, j) => {
              return (
                <option key={j} value={i.title}>
                  {i.title}
                </option>
              );
            })}
          </select>
          <div className="error">
            {formik.touched.brand && formik.errors.brand}
          </div>

          <select
            name="category"
            onChange={formik.handleChange("category")}
            onBlur={formik.handleBlur("category")}
            value={formik.values.brand}
            className="form-control py-3 mb-3"
            id=""
          >
            <option value="">Select Category</option>
          </select>
          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>
          <select
            name="color"
            onChange={formik.handleChange("color")}
            onBlur={formik.handleBlur("color")}
            value={formik.values.color}
            className="form-control py-3 mb-3"
            id=""
          >
            <option value="">Select Color</option>
          </select>
          <div className="error">
            {formik.touched.color && formik.errors.color}
          </div>
          <CustomInput
            type="number"
            label="Enter Kolichestvo li kvo"
            name="quantity"
            onChange={formik.handleChange("quantity")}
            onBlur={formik.handleBlur("quantity")}
            value={formik.values.quantity}
          />
          <div className="error">
            {formik.touched.quantity && formik.errors.quantity}
          </div>

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
