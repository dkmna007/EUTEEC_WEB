import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import CommonLayout from "../CommonLayout";

class _App extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <>
        <Head>
          <title>Title</title>
        </Head>
        <CommonLayout>
          <Component {...pageProps} />
        </CommonLayout>
      </>
    );
  }
}

export default _App;
