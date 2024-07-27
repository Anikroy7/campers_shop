import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToRemoveFromCart: (state, action) => {
      if (action.payload.type === "increment") {
        let cartItems = [...state.cartItems];
        const productExists = cartItems.find(
          (item) => item._id === action.payload.data._id
        );

        if (!productExists) {
          cartItems.push({
            ...action.payload.data,
            quantity: 1,
          });
        } else {
          const newProduct = {
            ...productExists,
            quantity: productExists.quantity + 1,
          };
          const newCartItems = cartItems.filter(
            (item) => item._id !== newProduct._id
          );
          cartItems = [newProduct, ...newCartItems];
        }
        return {
          ...state,
          cartItems,
        };
      }

      if (action.payload.type === "decrement") {
        let cartItems = [...state.cartItems];
        const productExists = cartItems.find(
          (item) => item._id === action.payload.data._id
        );

        if (productExists) {
          if (productExists.quantity > 1) {
            const newProduct = {
              ...productExists,
              quantity: productExists.quantity - 1,
            };
            const newCartItems = cartItems.filter(
              (item) => item._id !== newProduct._id
            );
            cartItems = [newProduct, ...newCartItems];
          } else {
            cartItems = cartItems.filter(
              (item) => item._id !== productExists._id
            );
          }
        }
        return {
          ...state,
          cartItems,
        };
      }

      return state;
    },
    removeProductFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item._id !== action.payload);
    },
    // state.cartItems = state.cartItems.filter(item => item._id !== action.payload);
    singleCheckout: (state, action) => {
      console.log(action.payload)
      state.cartItems = [];
      state.cartItems.push({ ...action.payload, quantity: 1 })
    }
  },

});

export const { addToRemoveFromCart, removeProductFromCart, singleCheckout } = cartSlice.actions;
export default cartSlice.reducer;
