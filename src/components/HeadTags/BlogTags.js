import React from "react";
import Head from "next/head";

export const BlogTags = ({ title, blog }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        property="og:url"
        content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
        key="url"
      />
      <meta property="og:type" content="article" key="type" />
      <meta property="og:title" content={blog.title} key="title" />
      <meta
        property="og:description"
        content={blog.content}
        key="description"
      />
      <meta property="og:image" content={blog.mediaUrl} key="image" />
    </Head>
  );
};
