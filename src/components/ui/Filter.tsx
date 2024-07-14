const Filter = ({
  categories,
  setSearchText,
  setCategory,
  setSortByPrice,
  setHighPrice,
  setLowPrice,
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
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div className="w-[100%]">
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="p-2 mb-4 mr-4 w-full bg-white text-gray-900 rounded border border-gray-300"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center mb-4 w-full">
            <label className="mr-2">Price: </label>
            <input
              onChange={(e) => setLowPrice(e.target.value)}
              type="number"
              className="p-2 w-20 bg-white text-gray-900 rounded border border-gray-300 mr-2"
            />
            <span>-</span>
            <input
              onChange={(e) => setHighPrice(e.target.value)}
              type="number"
              className="p-2 w-20 bg-white text-gray-900 rounded border border-gray-300 ml-2"
            />
          </div>
          <select
            onChange={(e) => setSortByPrice(e.target.value)}
            className="p-2 mb-4 w-full bg-white text-gray-900 rounded border border-gray-300"
          >
            <option value="">Sort by price</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
        <button className="p-2 mb-4 bg-red-500 text-white rounded">
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
