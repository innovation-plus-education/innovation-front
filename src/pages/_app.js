/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import App from "next/app";
import dlv from "dlv";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "@/sass/_app.scss";
import NavBar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import "@/lib/fontawesome";
import { getLayouts } from "../api";

function InnovationApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const { navbar, footer } = dlv(pageProps.layouts, "data.attributes");

  return (
    <QueryClientProvider client={queryClient}>
      <NavBar navbar={navbar} />
      <main role="main">
        <Component {...pageProps} />
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
      <Footer items={footer} />
    </QueryClientProvider>
  );
}

InnovationApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  try {
    const res = await getLayouts();
    return { ...appProps, pageProps: { layouts: res } };
  } catch (error) {
    return { ...appProps };
  }
};

export default InnovationApp;
