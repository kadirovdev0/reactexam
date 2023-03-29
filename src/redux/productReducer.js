import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    value: [],
  },
  reducers: {
    addProduct(state, action) {
      state.value.push(action.payload.product);
    },
    deleteProduct: (state, action) => {
      state.value = state.value.filter(
        (product) => state.value.indexOf(product) !== action.payload
      );
    },
  },
});

export const { addProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
