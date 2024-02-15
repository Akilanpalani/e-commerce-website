import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
    clearCart: (state, action) => {
      state.cart = state.cart.filter((x) => x.id !== action.payload);
    },
  },
});

export const { addToCart, updateCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
