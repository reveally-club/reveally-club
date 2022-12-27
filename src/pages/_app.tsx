import type { AppProps } from "next/app";
import Head from "next/head";
import { init } from "@amplitude/analytics-browser";
import {
  ExternalProvider,
  JsonRpcFetchFunc,
  Web3Provider,
} from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

import wrapper from "../modules/store/store";
import "./globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY!);

  const getLibrary = (provider: ExternalProvider | JsonRpcFetchFunc) => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
        <title>reveally.club</title>
        <meta name="description" content="..." />
        <meta name="author" content="reveally.club" />
        <link rel="canonical" href="https://reveally.club" />

        <meta property="og:type" content="reveally.club" />
        <meta property="og:url" content="https://reveally.club" />
        <meta property="og:title" content="reveally.club" />
        <meta property="og:image" content="https://reveally.club/og.png" />
        <meta
          property="og:description"
          content="hmm... reveal everything you want"
        />
        <meta property="og:site_name" content="reveally.club" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="reveally.club" />
        <meta name="twitter:title" content="reveally.club" />
        <meta
          name="twitter:description"
          content="hmm... reveal everything you want"
        />
        <meta name="twitter:url" content="https://reveally.club" />
      </Head>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </>
  );
};

export default wrapper.withRedux(App);
