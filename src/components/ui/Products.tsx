import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/productApi";
import Filter from "./Filter";
import ImageSlider from "./ImageSlider";
import Loading from "./Loading";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect } from "react";
import {
  setProducts,
} from "../../redux/features/filter/filterSlice";
import { FaEye } from "react-icons/fa";
import { addToRemoveFromCart } from "../../redux/features/cart/cartSlice";
import { TProduct } from "../../types";

export default function Products() {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const dispatch = useAppDispatch();
  const categories: string[] = [];
  const { products } = useAppSelector((state) => state.filters);


  useEffect(() => {
    if (!isLoading) {
      dispatch(setProducts({ products: data?.data }));
    }
  }, [isLoading]);

  if (isLoading) return <Loading />;


  data?.data?.map((product: TProduct) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });

  const handleCartItems = (product: TProduct) => {
    const payload = {
      type: "increment",
      data: product,
    };
    dispatch(addToRemoveFromCart(payload));
  };
  return (
    <>
      <div className="text-center pt-10">
        <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">
          Best Selling Products
        </h1>
      </div>
      <div className="card card-side">
        <div className="hidden lg:block sticky top-0">
          <Filter
            categories={categories}
            products={data.data}
          />
        </div>
        <div className="card-body">
          <main className="flex">
            <section className="w-fit  mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-10 mt-10 mb-5">
              {data
                ? products.map((data: TProduct) => {
                  const { category, _id, name, price, images } = data;
                  return (
                    <div
                      key={_id}
                      className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
                    >
                      <div>
                        <ImageSlider key={_id} images={images as string[]} />
                        <div className="px-4 py-3 w-72">
                          <span className="text-gray-400 mr-3 uppercase text-xs">
                            {category}
                          </span>
                          <p className="text-lg font-bold text-black truncate block capitalize">
                            {name}
                          </p>
                          <div className="flex items-center">
                            <p className="text-lg font-semibold text-black cursor-auto my-3">
                              ${price}
                            </p>
                            <Link key={_id} to={`/products/${_id}`}>
                              <span>
                                <p className="text-sm text-gray-900 ml-2 hover:cursor-pointer hover:text-red-500">
                                  <FaEye
                                    size={19}
                                    title="Show more details.."
                                  />
                                </p>
                              </span>
                            </Link>
                            <del>
                              <p className="text-sm text-gray-600 cursor-auto ml-2">
                                ${price + 200}
                              </p>
                            </del>

                            <div
                              onClick={() => handleCartItems(data)}
                              className="ml-3 hover:cursor-pointer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-bag-plus"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                                />
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
                : "No products here..."}
              {!products.length && <div>No products Here...</div>}
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
