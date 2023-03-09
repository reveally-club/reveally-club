import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow p-2 dark:bg-gray-50">
      <div className="container mx-auto md:flex md:items-center md:p-6 md:justify-between">
        <span className="text-sm text-gray-800 sm:text-cente">
          © 2022{" "}
          <a href="https://reveally.club" className="hover:underline">
            reveally.club
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 gap-4 text-sm text-gray-800 sm:mt-0">
          {/* <li>
            <Link className="text-xs hover:underline" href="/brand">
              About
            </Link>
          </li> */}
          <li>
            <Link className="text-xs hover:underline" href="/brand">
              Brand Guide
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
