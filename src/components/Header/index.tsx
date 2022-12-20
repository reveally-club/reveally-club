/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import { setAuth } from "../../state/auth";
import { useAppSelector } from "../../state/hooks";
import { shortenAddress } from "../../utils";

import ReveallyLogo from "../../assets/icons/reveally-logo.svg";
import Link from "next/link";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const injectedConnector = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
  });
  const { account, activate, active } = useWeb3React<Web3Provider>();

  useEffect(() => {
    activate(injectedConnector);
  }, []);

  const address = useAppSelector((state) => state.auth.address);

  return (
    <header className="border-b ">
      <nav className="flex item-center justify-between flex-wrap p-2 container mx-auto md:pl-0 pr-0">
        <div className="flex items-center flex-shrink-0 mr-12">
          {/* <Image className="h-8" src={ReveallyLogo} alt="reveally" /> */}
          <Link className="font-bold text-xl" href="/">
            Reveally
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-stone-900 hover:border-stone-900">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm w-full lg:flex-grow lg:mt-0 mt-4">
            <form className="flex items-center lg:ml-4">
              <label className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-1.5"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
          </div>
          <div className="hidden lg:flex lg:ml-16">
            {active === false ? (
              <button
                className="w-24 inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0"
                onClick={() => {
                  activate(injectedConnector);
                }}
              >
                지갑연결
              </button>
            ) : (
              <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0">
                {shortenAddress(account!)}
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
