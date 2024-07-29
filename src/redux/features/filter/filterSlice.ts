import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../../../types";


interface FilterState {
  products: TProduct[];
}

const initialState: FilterState = {
  products: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },
    setFilter: (state, action) => {
      console.log(action.payload, action.payload.data.products);
      const payloadProducts = action.payload.data.products;
      const payloadText = action.payload.data.text;
      switch (action.payload.type) {
        case "filterBySearch":
          state.products = [];
          state.products = payloadProducts.filter((item:TProduct) =>
            item.name.toLowerCase().includes(payloadText.toLowerCase())
          );
          break;
        case "filterByCategory":
          state.products = [];
          state.products = payloadProducts.filter((item:TProduct) =>
            item.category.toLowerCase().includes(payloadText.toLowerCase())
          );
          break;
        case "filterByPriceRange":
          state.products = [];
          switch (payloadText) {
            case "0-200":
              state.products = payloadProducts.filter(
                (product:TProduct) => product.price <= 200
              );
              break;
            case "201-500":
              state.products = payloadProducts.filter(
                (product:TProduct) => product.price > 200 && product.price <= 500
              );
              break;
            case "501-2000":
              state.products = payloadProducts.filter(
                (product:TProduct) => product.price > 500 && product.price <= 2000
              );
              break;
            case "2001-more":
              state.products = payloadProducts.filter(
                (product:TProduct) => product.price > 2000
              );
              break;

            default:
              state.products = payloadProducts;
              break;
          }
          break;
        case "filterByPriceOrder":
          switch (payloadText) {
            case "lowToHigh":
              state.products = [];
              const asc = [...payloadProducts].sort(
                (a, b) => a.price - b.price
              );
              state.products = asc;
              break;
            case "highToLow":
              state.products = [];
              const des = [...payloadProducts].sort(
                (a, b) => b.price - a.price
              );
              state.products = des;
              break;
            default:
              state.products = payloadProducts;
              break;
          }
          break;
        case "clear":
          state.products = [];
          state.products = payloadProducts;
          break;
        default:
          break;
      }
    },
    
  },
});

export const { setProducts, setFilter } = filterSlice.actions;
export default filterSlice.reducer;
