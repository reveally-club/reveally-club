import React, { useEffect } from "react";
import * as amplitude from "@amplitude/analytics-browser";

import Header from "../components/Header";
import Footer from "../components/Footer";

// favion
import OgImage from "../assets/favicon/og.png";
import Favicon from "../assets/favicon/favicon.ico";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import CreateFab from "../components/CreateFab";

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
      <div className="flex container mx-auto min-h-screen">
        <LeftNav />
        {children!}
        <RightNav />
      </div>
      <CreateFab />
      <Footer />
    </div>
  );
};

export default Layout;
