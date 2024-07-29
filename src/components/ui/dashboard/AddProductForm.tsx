import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateProductMutation } from "../../../redux/api/productApi";
import Loading from "../Loading";
import toast from "react-hot-toast";

type Inputs = {
  name: string;
  description: string;
  category: string;
  price: number;
  stockQuantity: number;
  ratings: number;
  images: any;
};



export default function AddProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const [createProduct, { isLoading, isSuccess }] =
    useCreateProductMutation();


  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key !== "images") {
        formData.append(
          key,
          typeof value !== "number" ? value.toString() : value
        );
      }
    });

    Array.from(data.images).forEach((file) => {
      formData.append("images", file as any);
    });
    createProduct(formData);
    reset();
  };

  if (isLoading) return <Loading />;

  if (isSuccess) toast.success("Product added successfully");



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
        <h3 className="text-center font-bold text-xl">Add Product</h3>
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
                  {...register("images", { required: true })}
                />
                {errors.images && <span>This field is required</span>}
              </div>
            </div>
            <div className="-mx-3 md:flex mt-2">
              <div className="md:w-full px-3">
                <input
                  className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-gray-100 rounded-full"
                  type="submit"
                  value={"Add"}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
