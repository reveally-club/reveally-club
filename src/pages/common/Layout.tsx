import React, { useEffect } from "react";
import * as amplitude from "@amplitude/analytics-browser";

import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  useEffect(() => {
    amplitude.init("c6b2f11ebf4353d5429f13df63bb5d35");
    amplitude.track("Button Clicked");
  }, []);

  return (
    <div>
      <Header />
      <main className="flex container mx-auto min-h-screen">{children!}</main>
      <Footer />
    </div>
  );
};

export default Layout;