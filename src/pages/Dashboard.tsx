import { Link, Outlet, useLocation } from "react-router-dom";
import "../assets/css/Dashboard.css";
import { Toaster } from "react-hot-toast";

export default function Dashboard() {
  const location = useLocation();
  const paths = location.pathname.split("/");

  return (
    <>
      <div className="dashboard-container">
        <nav className="sidebar">
          <div className="w-full text-center bg-black">
            <Link to={"/"} className="btn btn-ghost text-xl hover:bg-black">
              <img
                width={75}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVxLZr89XeZTUoE7oBFTV_1gROV9bugBdmQ&s"
                alt=""
              />
            </Link>
          </div>
          <ul className="sidebar-menu">
            <Link to="/dashboard">
              <li className={`${paths.length === 2 && "active"}`}>
                <span>Dashbaord</span>
              </li>
            </Link>
            <Link to="/dashboard/products/create">
              <li className={`${paths.includes("create") && "active"}`}>
                <span>Add Product</span>
              </li>
            </Link>
          </ul>
        </nav>
        <div className="main-content">
          <div className="header flex justify-between text-white">
            <div className="text-xl font-semibold px-4">
              Welcome to Dashbaord, Guest
            </div>
          </div>
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}
