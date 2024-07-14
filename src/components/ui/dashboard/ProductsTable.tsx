import toast from "react-hot-toast";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../redux/api/productApi";
import Loading from "../Loading";
import { Link } from "react-router-dom";

export default function ProductsTable() {
  const arr = [1, 2, 3, 4, 5];

  const { data, isLoading, error, isError } = useGetProductsQuery(undefined);
  const [deleteProduct, { isSuccess, data: deletedData }] =
    useDeleteProductMutation();

  const handleDelete = (id: string) => {
    const isConfirm = window.confirm("Are you want to delete this product?");
    if (isConfirm) {
      deleteProduct(id);
    }
  };
  if (isLoading) return <Loading />;
  console.log(data);
  if (isSuccess)
    toast.success("Product deleted successsfully", {
      id: deletedData.data._id,
    });

  console.log(deletedData);

  return (
    <div className="overflow-x-auto ">
      <table className="table text-black">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Ratings</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            data.data.map(
              ({ name, price, images, stockQuantity, ratings, _id }) => (
                <tr key={_id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={images[0]}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>{stockQuantity}</td>
                  <td>{ratings}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(_id)}
                      className="btn btn-sm btn-error text-white  mr-3"
                    >
                      Delete
                    </button>
                    <Link
                      to={`/dashboard/products/update/${_id}`}
                      className="btn btn-sm btn-accent text-white "
                    >
                      Edit
                    </Link>
                  </th>
                </tr>
              )
            )
          ) : (
            <p className="text-center w-full">No products here..</p>
          )}
        </tbody>
      </table>
    </div>
  );
}
