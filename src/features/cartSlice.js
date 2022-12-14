import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cartslice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExist = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });
    },
  },
  extraReducers: () => {},
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
