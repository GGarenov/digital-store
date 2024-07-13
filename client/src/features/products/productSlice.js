import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { productService } from "./producService";

export const getAllProducts = createAsyncThunk(
  "product/get",
  async (thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);

export const getAProduct = createAsyncThunk(
  "product/getAProduct",
  async (id, thunkAPI) => {
    try {
      return await productService.getSingleProduct(id);
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);

export const addToWishlist = createAsyncThunk(
  "product/wishlist",
  async (productId, thunkAPI) => {
    try {
      return await productService.addToWishlist(productId);
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);

const productState = {
  product: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error.message;
        if (state.isError === true) {
          toast.error(action.error);
        }
      })
      .addCase(addToWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addToWishlist = action.payload;
        state.message = "Product added to wishlist";
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error.message;
      })
      .addCase(getAProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleproduct = action.payload;
        state.message = "Product fetched successfully";
      })
      .addCase(getAProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error.message;
      });
  },
});

export default productSlice.reducer;
