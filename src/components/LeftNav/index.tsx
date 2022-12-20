import React from "react";
import Category from "../Category";
import UserMenu from "../UserMenu";

const LeftNav: React.FC = () => {
  return (
    <div className="w-48 hidden lg:block">
      <UserMenu />
      <div className="pt-4 border-r" />
      <Category />
    </div>
  );
};

export default LeftNav;
