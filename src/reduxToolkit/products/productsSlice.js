import { createSlice } from "@reduxjs/toolkit";
import { getAllTrends, getAllProducts } from "./extraReducer";
const initialState = {
  loading: true,
  trendProductsData: [],
  allProducts: [],
  korzinka: [],
  error: null,
};

const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const itemInCart = state.korzinka.findIndex(
        (item) => item.id === payload.id
      );
      if (itemInCart >= 0) {
        state.korzinka = state.korzinka.map((el) => {
          if (el.id === payload.id) {
            return {
              ...el,
              quantity: el.quantity + 1,
            };
          }

          return el;
        });
      } else {
        state.korzinka = [...state.korzinka, { ...payload, quantity: 1 }];
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.korzinka.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.korzinka.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.korzinka.filter(
        (item) => item.id !== action.payload
      );
      state.korzinka = removeItem;
    },
  },
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

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  productReducer.actions;
export default productReducer.reducer;
