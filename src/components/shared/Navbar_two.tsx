import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

export default function Navbar_two() {
  const { cartItems } = useAppSelector((state) => state.cart);

  const totalItems = cartItems.reduce((acc, curr) => {
    acc += curr.quantity;
    return acc;
  }, 0);
console.log('console form nav var',cartItems)
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/about-us">About</Link>
      </li>
      <li>
        <Link to="/cart">Cart ({totalItems})</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gray-950  sticky top-0 text-white z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          <img
            width={55}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVxLZr89XeZTUoE7oBFTV_1gROV9bugBdmQ&s"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <Link to={"/dashboard"} className="btn">
          Dashbaord
        </Link>
      </div>
    </div>
  );
}
