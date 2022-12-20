import {
  ExternalProvider,
  JsonRpcFetchFunc,
  Web3Provider,
} from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

import store from "../state";
import { useAppSelector } from "../state/hooks";

const ModalsProvider = ({ children }: { children: ReactNode }) => {
  const isCreateThread = useAppSelector(
    (state) => state.modal.isCreateThreadModal
  );

  return (
    <>
      {isCreateThread && <div></div>}
      {children!}
    </>
  );
};

const Providers = ({ children }: { children: ReactNode }) => {
  const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
  };
  return (
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ModalsProvider>{children}</ModalsProvider>
      </Web3ReactProvider>
    </Provider>
  );
};

export default Providers;
