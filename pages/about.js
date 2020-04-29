import React from "react";
import Head from "next/head";
const About = () => {
  return (
    <div>
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
          content="http://res.cloudinary.com/dxcci3wkx/image/upload/v1585837838/iapc5e6rsubnherxv17q.jpg"
          key="image"
        />
      </Head>
      About page
    </div>
  );
};

export default About;
