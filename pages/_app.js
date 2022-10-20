import '../styles/globals.css'
import "../styles/header.css";
import "../styles/navbar.css";
import "../styles/servicesCard.css";
import "../styles/layouts.css";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";
import Popper from "popper.js";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import Header from "../components/Header/Header";
import Navbar from "../components/Header/Navbar";
import Head from "next/head";
import React from "react";
import NavbarBootstrap from "../components/Header/NavbarBootstrap";
import VideoHeader from "../components/Header/VideoHeader";

import Footer from "../layouts/sections/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#00fff0",
    },
  },
});

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <NavbarBootstrap />
        {/* <NavbarBootstrap />*/}
      </ThemeProvider>
      {/* <VideoHeader /> */}

      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp
