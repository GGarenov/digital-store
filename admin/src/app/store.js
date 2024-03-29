import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import pcategoryReducer from "../features/pcategory/pcategoryslice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    productReducer,
    brandReducer,
    pcategoryReducer,
  },
});
