import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    qty: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      console.log("action in removeItem ", action.payload.card.info.id);
      let count = 1;

      let nw = state.items.filter((i) => {
        if (i.card.info.id !== action.payload.card.info.id) {
          return i;
        } else if (i.card.info.id === action.payload.card.info.id) {
          count++;

          return;
        }
      });

      state.items = nw;

      //state.items.findIndex()
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    editQuantity: (state, action) => {
      state.qty.push(action.payload);
    },
  },
});

export const { addItem, removeItem, clearCart, editQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
