import React from "react";
import CustomInput from "../components/CustomInput";

const AddBrand = () => {
  return (
    <div>
      <h3 className="mb-4 title">Add Brand</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Enter brand name" />
          <button className="btn btn-success border-0 rounded-3" type="submit">
            Add Brand
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBrand;
