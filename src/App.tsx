import Faq from "./components/ui/Faq";
import Header from "./components/shared/Header";
import Products from "./components/ui/Products";
import Testmonial from "./components/ui/Testmonial";
import FeaturedProducts from "./components/ui/FeaturedProducts";
import Footer from "./components/shared/Footer";
import { Toaster } from "react-hot-toast";
import Category from "./components/ui/Category";

function App() {
 
  
  return (
    <>
      <Header />
      <main>
        <Products/>
        <Category/>
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
