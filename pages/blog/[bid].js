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
import { AuthorCard } from "@/components/Cards/AuthorCard";
// import ClapButton from "../Components/Clap/ClapButton";

// import useBlogComments from "@/state/useBlogComments";
import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";
// import { LoginContext } from "@/context/LoginContext/LoginContext";

import { getAllBlogsWithSlug, getBlogAndMoreBlogs } from "@/lib/api";
import { BlogTags } from "@/components/HeadTags/BlogTags";

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

  // let bid = blog._id;
  // const commentState = useBlogComments({ bid });
  // const menuProps = useContext(LoginContext);
  let { author } = blog;
  return (
    <DefaultLayout /* menuProps={menuProps} */>
      <div className={classes.root}>
        <BlogTags title={"euteec blog"} blog={blog} />
        <Header
          title={blog && blog.title}
          subTitle={
            "A Place for Tech Enthuasists to Share and Discover New Stories"
          }
          // Current={staticAbout.Current}
          image={"https://source.unsplash.com/user/erondu/1600x900"}
        />
        <Container /* background={"#17141d"} */>
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
                  {/* custom media player */}
                  <SMediaPlayer mediaUrl={blog.mediaUrl} />

                  {/* share */}
                  <BlogActionBar blog={blog} />
                </Paper>
                <br /> <br />
                {/* blog content */}
                <MarkDown blog={blog} />
                {/* author  */}
                <AuthorCard author={author} />
                {/* <Comments {...commentState} />  */}
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

Blog.getInitialProps = async ({ query }) => {
  const blog = await getBlogAndMoreBlogs(query.bid);
  return { blog: blog };
};
