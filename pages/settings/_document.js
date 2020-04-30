import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps, lang };
  }

  render() {
    return (
      <Html lang={this.props.lang || "en"}>
        <Head>
          <title>Euteec Home</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            property="og:url"
            content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content="When Great Minds Don’t Think Alike"
          />
          <meta
            property="og:description"
            content="How much does culture influence creative thinking?"
          />
          <meta
            property="og:image"
            content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
