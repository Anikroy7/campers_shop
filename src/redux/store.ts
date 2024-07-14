import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./api/productApi";
import filterReducer from "./features/filter/filterSlice";
import cartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    filters: filterReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

// Get the type of our store variable
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];

export default store;
