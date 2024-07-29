import { Link } from "react-router-dom";
import { useGetFpProductsQuery } from "../../redux/api/productApi"
import Loading from "./Loading"
import { TProduct } from "../../types";

export default function FeaturedProducts() {
  const { data, isLoading } = useGetFpProductsQuery(undefined, {
    pollingInterval: 10000,
    skipPollingIfUnfocused: true
  });
  
  
  if (isLoading) return <Loading />
  console.log( data, isLoading)

  return (
    <div className="bg-gray-100 text-gray-900 p-8">
      <div className=" mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-black">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            data?.data?.map((product:TProduct) => {
              return <div key={product._id} className="bg-white p-6 rounded-lg shadow-lg">
                <img src={product?.images&&product?.images[0]} alt="Product 1" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{product?.name.slice(0,35)}...</h3>
                <p className="text-gray-700 mb-4">{product?.description.slice(0,80)}...</p>
                <Link to={`/products/${product._id}`}><button className="bg-blue-500 text-white px-4 py-2 rounded">View Details</button></Link>
              </div>
            })
          }

          {/* <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://wallpaperaccess.com/full/2416021.jpg" alt="Product 2" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Product 2</h3>
            <p className="text-gray-700 mb-4">This is a brief description of Product 2. It is a great product.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="https://wallpaperaccess.com/full/2416021.jpg" alt="Product 3" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Product 3</h3>
            <p className="text-gray-700 mb-4">This is a brief description of Product 3. It is a great product.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
          </div> */}
        </div>
      </div>
    </div>

  )
}
