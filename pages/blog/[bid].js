import React, { useContext } from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SMediaPlayer from "switch-media-player";
/* page components */

import {
  Header,
  Overlay,
  Container,
  Comments,
  Message,
  MarkDown
} from "@/components";
import BlogActionBar from "@/components/BlogActionBar";
// import { AuthorCard } from "@/components/Cards/AuthorCard";
// import ClapButton from "../Components/Clap/ClapButton";
import fetch from "isomorphic-unfetch";
// import useBlogComments from "@/state/useBlogComments";
import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";
// import { LoginContext } from "@/context/LoginContext/LoginContext";
import Head from "next/head";

const useStyles = makeStyles(theme => ({
  root: {},

  avatar: {
    position: "absolute",
    maxWidth: 400
  },
  heading: {
    textTransform: "capitalize"
  },

  mediabar: {
    padding: 5
  },
  mediaCaption: { position: "relative" }
}));

export default function Blog({ blog }) {
  const classes = useStyles();
  let bid = blog._id;
  // const commentState = useBlogComments({ bid });
  // const menuProps = useContext(LoginContext);

  return (
    <DefaultLayout /* menuProps={menuProps} */>
      <div className={classes.root}>
        <Head>
          <title>Blog</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            property="og:url"
            content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
            key="url"
          />
          <meta property="og:type" content="article" key="type" />
          <meta property="og:title" content="Think Loud" key="title" />
          <meta
            property="og:description"
            content="creative thinking?"
            key="description"
          />
          <meta
            property="og:image"
            content="http://res.cloudinary.com/dxcci3wkx/image/upload/v1586777179/ohicrk54q12aw0icuuaq.jpg"
            key="image"
          />
        </Head>
        <Container background={"#17141d"}>
          {blog && (
            <Grid container justify="space-evenly" spacing={1}>
              <Grid item md={6} sm={6} xs={12}>
                {/* show  media  */}
                <Paper
                  style={{
                    backgroundImage: `url("/static/assets/images/placeholder.jpg")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                  }}
                >
                  <SMediaPlayer mediaUrl={blog.mediaUrl} />
                  {/* comments/likes/views */}
                  <BlogActionBar blog={blog} />
                </Paper>
                <br /> <br />
                {/* blog content */}
                <MarkDown blog={blog} />
                {/* author an comments */}
                {/* <div>{author.userId && <AuthorCard blog={author} />}</div>
                <Comments {...commentState} /> */}
              </Grid>

              {/* <ClapButton onCountChange={onCountChange} /> */}
            </Grid>
          )}

          {/* <Message
                message={"Ooops!! something went wrong"}
                show={blogFetchError}
                key="error"
                action={handleRetry}
              /> */}
        </Container>
      </div>
    </DefaultLayout>
  );
}

Blog.getInitialProps = async ({ res, query }) => {
  let api_base = "https://euteec-api.herokuapp.com";
  let r = await fetch(`${api_base}/api/blogs/${query.bid}`);
  let blog = await r.json();

  if (blog.error && res) {
    res.statusCode = 404;
  }
  if (blog) {
    return {
      blog
    };
  }
};
