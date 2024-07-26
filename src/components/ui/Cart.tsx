import { Link } from "react-router-dom";
import { addToRemoveFromCart, removeProductFromCart } from "../../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

export default function Cart() {
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  
  const totalItems = cartItems.reduce((acc, curr) => {
    acc += curr.quantity;
    return acc;
  }, 0);
  const totalPrice = cartItems.reduce((acc, curr) => {
    acc += (curr.price * curr.quantity)
    return acc
  }, 0)

  const handleCartItems = (type, item) => {
    const payload = {
      type: type,
      data: item,
    };
    dispatch(addToRemoveFromCart(payload));
    console.log(cartItems)
  };


  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row shadow-md my-10">
          <div className="w-full md:w-3/4 px-4 md:px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-xl md:text-2xl">
                Shopping Cart
              </h1>
              <h2 className="font-semibold text-xl md:text-2xl">
                <span className="itemsQuantity">{totalItems}</span> Items
              </h2>
            </div>
            <div className="flex flex-col md:flex-row mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-full md:w-2/5 hidden md:block">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 hidden md:block">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 hidden md:block">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 hidden md:block">
                Total
              </h3>
            </div>


            {cartItems.length > 0 ? cartItems.map((item) => (
              <div className="flex flex-col md:flex-row items-center hover:bg-gray-100 -mx-4 px-6 py-5 shadow-sm my-3">
                <div className="flex w-full md:w-2/5">
                  <div className="w-20 md:w-24">
                    <img className="h-24 md:h-32" src={item.images[0]} alt="" />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">
                      {item.name.slice(0, 20)}...
                    </span>
                    <span className="text-red-500 text-xs">
                      {item.category}
                    </span>
                    <span onClick={() => dispatch(removeProductFromCart(item._id))} className="font-semibold hover:cursor-pointer hover:text-red-500 text-gray-500 text-xs">
                      Remove
                    </span>
                  </div>
                </div>
                <div className="flex md:justify-center w-full md:w-1/5 mt-3">
                  <svg
                    onClick={() => handleCartItems("decrement", item)}
                    className="fill-current text-gray-600 w-3 hover:text-orange-500 hover:cursor-pointer md:w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>

                  <input
                    disabled
                    id="itemsQuantityInput-{{ $item->id }}"
                    className="mx-2 border text-center w-8"
                    type="text"
                    value={item.quantity}
                  />
                  <svg
                    onClick={() => handleCartItems("increment", item)}
                    className="fill-current text-gray-600 w-3 hover:text-orange-500 hover:cursor-pointer md:w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="md:text-center w-full md:w-1/5 font-semibold text-sm">
                  <span className="md:hidden">Price:</span>
                  <span className="text-2xl font-bold">$</span> {item.price}
                </span>
                <span className="md:text-center w-full md:w-1/5 font-semibold text-sm">
                  <span className="md:hidden">Total Price:</span>
                  <span className="text-2xl font-bold">$</span>{" "}
                  <span id="current_price-{{ $item->id }}">
                    {item.quantity * item.price}
                  </span>
                </span>
              </div>
            )) : <div className="text-center mt-8">
              <p className="text-lg font-semibold text-orange-500">
                No items found
              </p>
            </div>}

            <Link
              to={"/products"}
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>
          <div id="summary" className="w-full md:w-1/4 px-4 md:px-8 py-10">
            <h1 className="font-semibold text-xl md:text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items <span className="itemsQuantity">{cartItems.length}</span>
              </span>
              <span className="font-semibold text-sm total_price">
                <span className="text-2xl font-bold">$</span>
                {totalPrice}
              </span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm bg-white border">
                <option className="text-red-500">
                  No shipping order available
                </option>
              </select>
            </div>
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full border"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span className="total_price">
                  <span className="text-2xl font-bold">$</span> {totalPrice}
                </span>
              </div>
              <Link
                to={"/checkout"}
                className="bg-indigo-500 font-semibold hover:bg-indigo-600 p-3 text-sm text-white uppercase w-full"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
