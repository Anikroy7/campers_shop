import React from "react";
import Navbar_two from "../shared/Navbar_two";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";

interface OutLayoutProps {
  children: React.ReactNode;
}

const OutLayout: React.FC<OutLayoutProps> = ({ children }) => {
  return (
    <>
      <main>
        <Navbar_two />
        {children}
        <Footer />
        <Toaster/>
      </main>
    </>
  );
};

export default OutLayout;
