import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, actions) => {
      state.items.push(actions.payload);
    },
    removeItem: (state, actions) => {
      //state.items.pop();
      const idToRemove = actions.payload;
      state.items = state.items.filter(
        (item) => item?.card?.info?.id != idToRemove
      );
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
