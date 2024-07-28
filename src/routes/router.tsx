import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import ProductsTable from "../components/ui/dashboard/ProductsTable";
import AddProductForm from "../components/ui/dashboard/AddProductForm";
import ProductsPage from "../pages/ProductsPage";
import UpdateProductForm from "../components/ui/dashboard/UpadateProduct";
import Payments from "../components/payments/Payments";
import Success from "../components/payments/Success";
import FeaturedProducts from "../components/ui/FeaturedProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/about-us",
    element: <AboutUsPage />,
  },
  {
    path: "/products/:id",
    element: <ProductDetailsPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <Payments />,
  },
  {
    path: "/checkout/success",
    element: <Success />,
  },
  {
    path: "/fp",
    element: <FeaturedProducts />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <ProductsTable />,
      },
      {
        path: "products/update/:id",
        element: <UpdateProductForm />,
      },
      {
        path: "products/create",
        element: <AddProductForm />,
      },
    ],
  },
]);

export default router;
