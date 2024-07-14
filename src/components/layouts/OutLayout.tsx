import React from "react";
import Navbar_two from "../shared/Navbar_two";
import Footer from "../shared/Footer";

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
      </main>
    </>
  );
};

export default OutLayout;
