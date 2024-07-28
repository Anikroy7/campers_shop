import Category from "./components/ui/Category";
import Faq from "./components/ui/Faq";
import Header from "./components/shared/Header";
import Products from "./components/ui/Products";
import Testmonial from "./components/ui/Testmonial";
import FeaturedProducts from "./components/ui/FeaturedProducts";
import Footer from "./components/shared/Footer";
import { Toaster } from "react-hot-toast";
import { useGetProductsQuery } from "./redux/api/productApi";
import Loading from "./components/ui/Loading";

function App() {
  const { data, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) return <Loading />
  
  return (
    <>
      <Header />
      <main>
        <Products data={data} isLoading={isLoading}/>
        <Category product={data.data} />
        <FeaturedProducts />
        <Testmonial />
        <Faq />
        <Footer />
      </main>
        <Toaster />
    </>
  );
}

export default App;
