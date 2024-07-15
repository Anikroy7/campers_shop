import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

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
      const updatedState = state.cartItems.filter(item => item._id !== action.payload);
      state.cartItems = updatedState;
      return {
        ...state,
      }
    }
  },

});

export const { addToRemoveFromCart,removeProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
