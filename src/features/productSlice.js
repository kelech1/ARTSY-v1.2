import { createSlice } from "@reduxjs/toolkit";
import { products } from "./products";

const initialState = {
  products,
  cartItems: [],
};

export const productSlice = createSlice({
  name: "allproducts",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.products.forEach((product) => {
        if (product.id === action.payload) {
          product.unit += 1;
          return;
        }
      });
    },
    decrement: (state, action) => {
      state.products.forEach((product) => {
        if (product.id === action.payload) {
          if (product.unit > 1) {
            product.unit -= 1;
          }
        }
      });
    },
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
  extraReducers: () => {},
});

export const { increment, decrement, addToCart, removeItem } =
  productSlice.actions;
export default productSlice.reducer;
