import React from "react";
import Head from "next/head";
export const AboutTags = () => {
  return (
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        property="og:url"
        content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
        key="url"
      />
      <meta property="og:type" content="article" key="type" />
      <meta
        property="og:title"
        content=" Egerton University Technology Enthusiast Engineers Club(EUTEEC)"
        key="title"
      />
      <meta
        property="og:description"
        content="Egerton University Technology Enthusiast Engineers Club is an association of Electrical and Control Engineering students within the faculty of Engineering. We are responsible for most of the projects that involve automation, programming, sensor integration,modelling and simulation. It is a union of the most competent students ranging from the fresh minds of first years to the experienced finalists in fifth year not forgetting the alumni and graduates."
        key="description"
      />
      <meta property="og:image" content="/assets/images/guys.jpg" key="image" />
    </Head>
  );
};
