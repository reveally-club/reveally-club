/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import { track } from "@amplitude/analytics-browser";
import { shortenAddress } from "../../modules/utils";

import Link from "next/link";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
  const injectedConnector = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
  });
  const { account, activate, active } = useWeb3React<Web3Provider>();

  useEffect(() => {
    activate(injectedConnector);
  }, []);

  return (
    <header className="border-b">
      <nav className="flex item-center justify-between flex-wrap p-2 container mx-auto md:pl-0 pr-0">
        <div className="flex items-center flex-shrink-0 mr-12">
          <Link className="font-bold text-xl" href="/">
            Reveally.club
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
            <SearchBar />
          </div>
          <div className="hidden lg:flex lg:ml-16">
            {active === false ? (
              <button
                className="w-24 inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0"
                onClick={() => {
                  activate(injectedConnector);
                  const eventProperties = {
                    "Wallet Address": account,
                  };

                  track("Connect Wallet", eventProperties);
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
