import React from "react";
import { Typography, Grid, makeStyles, Divider, Box } from "@material-ui/core/";
import { Container, Header } from "@/components";

/* constants */
import { Constants } from "@/constants/About";
import Head from "next/head";

const useStyles = makeStyles(theme => ({
  root: {
    // margin: theme.spacing(0, 2)
  },
  subT: {
    fontFamily: '"Roboto Slab", "Times New Roman", serif',
    fontWeight: "700",
    lineHeight: "1.5em"
    // textAlign: "center",
  },
  underline: {
    position: "relative",
    margin: "auto",
    borderBottom: "solid",
    width: 10,
    display: "flex",
    color: theme.palette.primary.dark,
    marginBottom: 10
  },
  logo: {
    height: 90,
    width: 90,
    float: "right"
  },
  subheading: {
    color: theme.palette.primary.dark
  }
}));

const About = () => {
  const classes = useStyles();
  const {
    staticAbout,
    partners,
    activities,
    membership,
    appLogo,
    euteecDescription
  } = Constants();

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
      <Header
        title={staticAbout.Title}
        subTitle={staticAbout.headerSubTitle}
        Current={staticAbout.Current}
        image={"/assets/images/tech1.jpg"}
      />
      <Container background={"#17141d"}>About Page</Container>
    </div>
  );
};

export default About;
