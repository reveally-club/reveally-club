/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import { shortenAddress } from "../../modules/utils";
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

import Link from "next/link";

const Header: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  const [name, setName] = useState("");

  useEffect(() => {
    ensName ? setName(`${ensName}`) : setName(`${shortenAddress(address!)}`);
  }, [ensName]);

  return (
    <header className="border-b">
      <nav className="flex item-center justify-between flex-wrap p-3 pl-3 container mx-auto md:pl-0 md:p-0 pr-0">
        <div className="flex items-center flex-shrink-0 mr-12">
          <Link
            className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400"
            href="/"
          >
            Reveally.club
          </Link>
        </div>
        <div className="hidden w-full md:flex md:w-auto mr-4">
          {/* <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:text-primary"
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:text-primary"
                aria-current="page"
              >
                Products
              </Link>
            </li>
          </ul> */}
          {isConnected ? (
            <button
              className="text-gray-900 py-2  bg-white hover:bg-gray-100 border focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 mt-2 mb-2 text-center inline-flex items-center"
              onClick={() => {
                disconnect();
              }}
            >
              {name}
            </button>
          ) : (
            <button
              type="button"
              className="text-gray-900 py-2  bg-white hover:bg-gray-100 border focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 mt-2 mb-2 text-center inline-flex items-center"
              onClick={() => {
                connect();
              }}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
