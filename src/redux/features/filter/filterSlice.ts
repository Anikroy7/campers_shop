import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  // Add other relevant product fields
}

interface FilterState {
  products: Product[];
  search: string;
  category: string;
  lowPrice: number;
  highPrice: number;
  sortByPrice: "lowToHigh" | "highToLow";
}

const initialState: FilterState = {
  search: "",
  category: "",
  lowPrice: 0,
  highPrice: Infinity,
  sortByPrice: "lowToHigh",
  products: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<{ products: Product[] }>) => {
      state.products = action.payload.products;
    },
    setFilter: (state, action: PayloadAction<Partial<FilterState>>) => {
      console.log(action.payload.products);
      const { search, category, lowPrice, highPrice, sortByPrice, products } =
        action.payload;
      let filteredProducts = state.products;

      if (category) {
        filteredProducts = products.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        );
      } else {
        filteredProducts = products;
      }

      if (lowPrice !== undefined) {
        filteredProducts = filteredProducts?.filter(
          (product) => product.price >= lowPrice
        );
      }

      if (highPrice !== undefined && highPrice !== Infinity) {
        filteredProducts = filteredProducts?.filter(
          (product) => product.price <= highPrice
        );
      }

      if (sortByPrice) {
        filteredProducts = filteredProducts.sort((a, b) =>
          sortByPrice === "lowToHigh" ? a.price - b.price : b.price - a.price
        );
      }

      state.products = filteredProducts;
    },
  },
});

export const { setProducts, setFilter } = filterSlice.actions;
export default filterSlice.reducer;
