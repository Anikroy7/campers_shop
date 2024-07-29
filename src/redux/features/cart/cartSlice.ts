import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../../../types";
import toast from "react-hot-toast";

type InitialState = {
  cartItems: TProduct[]
}

const initialState: InitialState = {
  cartItems: []
}

const cartSlice = createSlice({
  name: "cart",

  initialState: initialState,
  reducers: {
    addToRemoveFromCart: (state, action) => {
      if( action.payload.data.stockQuantity){
        const product = state.cartItems.find(
          (product) => product._id === action.payload.data._id
        );
        switch (action.payload.type) {
          case "increment":
            if (!product) {
              state.cartItems.push({ ...action.payload.data, quantity: 1 });
              toast.success(` added to cart`);
            } else {
              if (product.stockQuantity > product.quantity) {
                const newProduct = {
                  ...product,
                  quantity: product.quantity + 1,
                };
                state.cartItems = state.cartItems.filter(
                  (pd) => pd._id !== product._id
                );
                state.cartItems.push(newProduct);
                toast.success(` added to cart`);
              } else {
                toast.error("Quantity is more than stock quantity!"!);
              }
            }
            break;
          case "decrement":
            if(product){
              if (product.quantity === 1) {
                state.cartItems = state.cartItems.filter(
                  (item) => item._id !== product._id
                );
              } else {
                const newProduct = {
                  ...product,
                  quantity: product.quantity - 1,
                };
                state.cartItems = state.cartItems.filter(
                  (pd) => pd._id !== product._id
                );
                state.cartItems.push(newProduct);
              }
            }
            break;
  
          default:
            return state;
        }
      }else{
        toast.error("Not available!"!);
      }
    },
    removeProductFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    },
    // state.cartItems = state.cartItems.filter(item => item._id !== action.payload);
    singleCheckout: (state, action) => {
      state.cartItems = [];
      if(action.payload.stockQuantity){
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }else{
        toast.error("Not available!"!);
      }
    },
  },

});

export const { addToRemoveFromCart, removeProductFromCart, singleCheckout } = cartSlice.actions;
export default cartSlice.reducer;
