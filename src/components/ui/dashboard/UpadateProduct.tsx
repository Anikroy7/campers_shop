import { useForm, SubmitHandler } from "react-hook-form";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../../redux/api/productApi";
import Loading from "../Loading";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

type Inputs = {
  name: string;
  description: string;
  category: string;
  price: number;
  stockQuantity: number;
  ratings: number;
  images: any;
};

export default function UpdateProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading: getProductLoading, data } = useGetSingleProductQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const [
    updateProduct,
    { isLoading, isSuccess, error, isError, data: updatedData },
  ] = useUpdateProductMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Product updated successfully");
      navigate("/dashboard");
    }
    /* if (isError && error?.data?.errorSources) {
      error.data.errorSources.forEach((err) => {
        toast.error(err.message);
      });
    } */
  }, [isSuccess, isError, error]);
  if (getProductLoading) return <Loading />;

  const onSubmit: SubmitHandler<Inputs> = (updateData) => {
    const formData = new FormData();

    // Append all form fields except for images
    Object.entries(updateData).forEach(([key, value]) => {
      if (key !== "images") {
        formData.append(
          key,
          typeof value !== "number" ? value.toString() : value
        );
      }
    });

    // Append each image file to the FormData object
    if (updateData.images) {
      Array.from(updateData.images).forEach((file) => {
        formData.append("images", file as any);
      });
    }
    updateProduct({ formData, id });
  };

  console.log(isLoading, isSuccess, error, isError, updatedData, data);
  return (
    <section
      className="bg-gray-100 flex bg-local"
      style={
        {
          // backgroundImage: `url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/architect.svg')`,
        }
      }
    >
      <div className="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
        <h3 className="text-center font-bold text-xl">Update Product</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="product-name"
                >
                  Product name*
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  type="text"
                  placeholder="Enter product name..."
                  defaultValue={data.data.name}
                  {...register("name", { required: true })}
                />
                {errors.name && <span>This field is required</span>}
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="product-description"
                >
                  Product Description*
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  type="text"
                  placeholder="Enter product description..."
                  defaultValue={data.data.description}
                  {...register("description", { required: true })}
                />
                {errors.description && <span>This field is required</span>}
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="product-category"
                >
                  Product Category*
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  type="text"
                  placeholder="Enter category category..."
                  defaultValue={data.data.category}
                  {...register("category", { required: true })}
                />
                {errors.description && <span>This field is required</span>}
              </div>
            </div>

            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="title"
                >
                  Price*
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="title"
                  type="number"
                  placeholder="Enter product price"
                  defaultValue={data.data.price}
                  {...register("price", { required: true })}
                />
                {errors.price && <span>This field is required</span>}
              </div>
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="stockQuantity"
                >
                  Quantity*
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  type="number"
                  placeholder="Enter product stockQuantity"
                  {...register("stockQuantity", { required: true })}
                  defaultValue={data.data.stockQuantity}
                />
                {errors.stockQuantity && <span>This field is required</span>}
              </div>
              <div className="md:w-1/2 px-3">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="department"
                >
                  Ratings*
                </label>
                <div>
                  <input
                    className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                    type="number"
                    placeholder="Enter product ratings"
                    defaultValue={data.data.ratings}
                    {...register("ratings", { required: true })}
                  />
                  {errors.ratings && <span>This field is required</span>}
                </div>
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="product-name"
                >
                  Product image{" "}
                  <span>* ( you can upload mutiple images if needed)</span>
                </label>
                <input
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  type="file"
                  placeholder="Enter product name..."
                  multiple
                  accept="images/*"
                  {...register("images")}
                />
                <div className="grid grid-cols-4 gap-4">
                  {data.data.images.map((image:string) => (
                    <div key={image} className="avatar">
                      <div className="w-24 rounded">
                        <img src={image} />
                      </div>
                    </div>
                  ))}
                </div>
                {errors.images && <span>This field is required</span>}
              </div>
            </div>
            <div className="-mx-3 md:flex mt-2">
              <div className="md:w-full px-3">
                <input
                  className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-gray-100 rounded-full"
                  type="submit"
                  value={"Update"}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
