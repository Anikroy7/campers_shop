const Filter = ({
  categories,
  setSearchText,
  setCategory,
  setSortByPrice,
  setHighPrice,
  setLowPrice,
  handleSetFilter,
}) => {
  return (
    <div className="bg-gray-100 text-gray-900 h-[100vh] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl font-bold mb-6 text-black">
          Product Search & Filter
        </h1>
        <div className="  mb-4">
          <div>
            <input
              type="text"
              placeholder="Search by name or description"
              className="p-2 mb-4 mr-4 w-full  bg-white text-gray-900 rounded border border-gray-300"
              onChange={(e) =>
                handleSetFilter(e.target.value, "filterBySearch")
              }
            />
          </div>
          <div className="w-[100%]">
            <label className="block mb-2 text-gray-700">
              Filter Products By Category
              <select
                onChange={(e) =>
                  handleSetFilter(e.target.value, "filterByCategory")
                }
                className="p-2 mb-4 mr-4 w-full bg-white text-gray-900 rounded border border-gray-300"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="w-[100%]">
            <label className="block mb-2 text-gray-700">
              Filter Products By Price Range
              <select
                onChange={(e) =>
                  handleSetFilter(e.target.value, "filterByPriceRange")
                }
                className="p-2 mb-4 mr-4 w-full bg-white text-gray-900 rounded border border-gray-300"
              >
                <option value="">All</option>
                <option value="0-200">0-200</option>
                <option value="201-500">201-500</option>
                <option value="501-2000">501-2000</option>
                <option value="2001-more">up to 2000</option>
              </select>
            </label>
          </div>

          <label className="block mb-2 text-gray-700">
            Sort Products By Price
            <select
              onChange={(e) =>
                handleSetFilter(e.target.value, "filterByPriceOrder")
              }
              className="p-2 mb-4 w-full bg-white text-gray-900 rounded border border-gray-300"
            >
              <option value="">All</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </label>
        </div>
        <button
          onClick={() => handleSetFilter(null, "clear")}
          className="p-2 mb-4 bg-red-500 text-white rounded"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
  