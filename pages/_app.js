/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import "../styles/globals.css";
import "../sass/_app.scss";
import NavBar from "../src/layouts/navbar";
import "../src/lib/fontawesome";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
