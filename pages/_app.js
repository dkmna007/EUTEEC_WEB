import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import store from "../src/store";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-mde/lib/styles/css/react-mde-all.css";

// import { LoginDialog } from "@/components/Dialog/LoginDialog";
import { PersistGate } from "redux-persist/integration/react";
import { DARK_THEME } from "@/app-theme";
// import "react-mde/lib/styles/css/react-mde-all.css";

const _App = withRedux(store)(
  class _App extends App {
    // static async getInitialProps({ Component, ctx }) {
    //   return {
    //     pageProps: Component.getInitialProps
    //       ? await Component.getInitialProps(ctx)
    //       : {}
    //   };
    // }
    static async getInitialProps(appCtx) {
      const { Component, ctx } = appCtx;
      let isServer = typeof window === "undefined";
      // fetching other resources - make sure to not use anything request-based since for SSG pages, this will only be evaluated at build time and compiled into the static page

      if (Component.hasStaticProps && isServer) {
        return { is404: false };
      } else {
        return {
          pageProps: Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {}
        };
      }
    }

    componentDidMount() {
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      const { Component, pageProps, store } = this.props;

      return (
        <Container>
          <Head>
            <title>Euteec</title>
          </Head>
          <MuiThemeProvider theme={DARK_THEME}>
            <CssBaseline />
            <Provider store={store}>
              {/* <PersistGate persistor={store.__PERSISTOR} loading={null}> */}

              {/* <LoginDialog /> */}
              <Component {...pageProps} />

              {/* </PersistGate> */}
            </Provider>
          </MuiThemeProvider>
        </Container>
      );
    }
  }
);

export default _App;
