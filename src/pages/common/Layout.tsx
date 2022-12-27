import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import RightNav from "./RightNav";
import LeftNav from "./LeftNav";

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div>
      <Header />
      <main className="flex container mx-auto min-h-screen">
        <LeftNav />
        {children!}
        <RightNav />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
