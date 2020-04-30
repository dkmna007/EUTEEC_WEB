import React from "react";
import Head from "next/head";

export const HomeTags = () => {
  return (
    <Head>
      <title>Euteec Home</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        property="og:url"
        content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
        key="url"
      />
      <meta property="og:type" content="article" key="url" />
      <meta
        property="og:title"
        content="When Great Minds Don’t Think Alike"
        key="title"
      />
      <meta
        property="og:description"
        content="How much does culture influence creative thinking?"
        key="description"
      />
      <meta
        property="og:image"
        content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
        key="image"
      />
    </Head>
  );
};
