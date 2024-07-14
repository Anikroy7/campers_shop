import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/productApi";
import Filter from "./Filter";
import ImageSlider from "./ImageSlider";
import Loading from "./Loading";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect, useState } from "react";
import {
  setFilter,
  setProducts,
} from "../../redux/features/filter/filterSlice";

export default function Products() {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const dispatch = useAppDispatch();
  const categories: string[] = [];
  const { products } = useAppSelector((state) => state.filters);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [lowPrice, setLowPrice] = useState(0);
  const [highPrice, setHighPrice] = useState(null);
  const [sortByPrice, setSortByPrice] = useState("");
  const filterItems = {
    products: data?.data,
    search,
    category,
    lowPrice,
    highPrice,
    sortByPrice,
  };

  useEffect(() => {
    if (!isLoading) {
      dispatch(setProducts({ products: data.data }));
    }
  }, [isLoading]);
  useEffect(() => {
    dispatch(setFilter(filterItems));
  }, [search, category, lowPrice, highPrice, sortByPrice]);

  useEffect(() => {}, [products]);
  if (isLoading) return <Loading />;

  data.data.map((product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });
  return (
    <>
      <div className="text-center pt-10">
        <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">
          Best Selling Products
        </h1>
      </div>
      <div className="card card-side">
        <div className="sticky top-0">
          <Filter
            categories={categories}
            setSearchText={setSearch}
            setCategory={setCategory}
            setLowPrice={setLowPrice}
            setHighPrice={setHighPrice}
            setSortByPrice={setSortByPrice}
          />
        </div>
        <div className="card-body">
          <main className="flex">
            <section className="w-fit  mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-10 mt-10 mb-5">
              {data
                ?data. data?.map(
                    ({
                      category,
                      _id,
                      name,
                      price,

                      images,
                    }) => (
                      <Link key={_id} to={`/products/${_id}`}>
                        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                          <div>
                            <ImageSlider images={images} />
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
                                <del>
                                  <p className="text-sm text-gray-600 cursor-auto ml-2">
                                    ${price + 200}
                                  </p>
                                </del>
                                <div className="ml-3">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-bag-plus"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                                    />
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    )
                  )
                : ""}
            </section>
          </main>
        </div>
      </div>

      {/* <Filter />   */}
      {/*  <main className="flex">
        <section className="w-fit  mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-10 mt-10 mb-5">
          {array.map((d) => (
            <div
              key={d}
              className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div>

                <ImageSlider />
                <div className="px-4 py-3 w-72">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    Brand
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    Product Name
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      $149
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">
                        $199
                      </p>
                    </del>
                    <div className="ml-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main> */}
    </>
  );
}
