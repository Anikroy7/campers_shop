import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["products"],
    }),
    getFpProducts: builder.query({
      query: () => "/products/fp",
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    createProduct: builder.mutation({
      query: (data) => {
        return {
          url: "/products",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["products"],
    }),
    updateProduct: builder.mutation({
      query: ({ formData, id }) => {
        console.log(formData, /* fromData.get("name") */);
        return {
          url: `/products/${id}`,
          method: "PUT",
          body: formData,
        };
      },
      invalidatesTags: ["products"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetSingleProductQuery,
  useUpdateProductMutation,
  useGetFpProductsQuery
} = productApi;
