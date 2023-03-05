import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import TagManager from "react-gtm-module";

import { WagmiConfig, createClient, configureChains, mainnet } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
import wrapper from "../modules/store/store";
import "./globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-W6MG4BL" });
  }, []);

  const { chains, provider, webSocketProvider } = configureChains(
    [mainnet],
    [
      alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY! }),
      publicProvider(),
    ]
  );

  const client = createClient({
    autoConnect: true,
    connectors: [
      new InjectedConnector({
        chains,
        options: {
          name: "bok.xyz",
        },
      }),
    ],
    provider,
    webSocketProvider,
  });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
        <title>Reveally.club</title>
        <meta name="description" content="..." />
        <meta name="writer" content="Reveally.club" />
        <link rel="canonical" href="https://reveally.club" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reveally.club" />
        <meta property="og:title" content="Reveally.club" />
        <meta property="og:image" content="https://reveally.club/og.png" />
        <meta
          property="og:description"
          content="hmm... reveal everything you want"
        />
        <meta property="og:site_name" content="reveally.club" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Reveally.club" />
        <meta name="twitter:title" content="Reveally.club" />
        <meta
          name="twitter:description"
          content="hmm... reveal everything you want"
        />
        <meta name="twitter:url" content="https://reveally.club" />
      </Head>
      <WagmiConfig client={client}>
        <Component {...pageProps} />
      </WagmiConfig>
    </>
  );
};

export default wrapper.withRedux(App);
