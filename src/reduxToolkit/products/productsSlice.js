import { createSlice } from "@reduxjs/toolkit";
import { getAllTrends, getAllProducts } from "./extraReducer";
const initialState = {
  loading: true,
  trendProductsData: [],
  allProducts: [],
  error: null,
};

const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    // Get All Trends
    build
      .addCase(getAllTrends.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTrends.fulfilled, (state, action) => {
        state.loading = false;
        state.trendProductsData = action.payload;
      })
      .addCase(getAllTrends.rejected, (state, action) => {
        state.error = action.error.message;
      });

    //Get ALL Products

    build
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const {} = productReducer.actions;
export default productReducer.reducer;
