import { createSlice } from "@reduxjs/toolkit";


const cardSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, actions) => {
      state.items.push(actions.payload);
    },
    removeFromCart: (state, actions) => {
      state.items = state.items.filter(
        (items) => items.productId !== actions.payload.payload
      );
    },
  },
});

export const{addToCart,removeFromCart} = cardSlice.actions;
export const selectCardItems = (state)=> state.cart.items
export default cardSlice.reducer;