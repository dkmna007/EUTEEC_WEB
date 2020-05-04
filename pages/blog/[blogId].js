import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SMediaPlayer from "switch-media-player";
/* page components */

import { Header, Container, Comments, Message, MarkDown } from "@/components";
import BlogActionBar from "@/components/BlogActionBar";
import { AuthorCard } from "@/components/Cards/AuthorCard";
// import ClapButton from "../Components/Clap/ClapButton";

import useBlogComments from "@/state/useBlogComments";
import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";

import { getAllBlogs, getBlogAndMoreBlogs } from "@/lib/api";
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

export default function Blog({ blog, error, blogId }) {
  const classes = useStyles();

  const commentState = useBlogComments({ blogId });

  return (
    <DefaultLayout /* menuProps={menuProps} */>
      <div className={classes.root}>
        {blog && <BlogTags title={"euteec blog"} blog={blog} />}
        <Header
          title={blog && blog.title}
          subTitle={
            "A Place for Tech Enthuasists to Share and Discover New Stories"
          }
          // Current={staticAbout.Current}
          image={"https://source.unsplash.com/user/erondu/1600x900"}
        />
        <Container background={"#17141d"}>
          {blog && (
            <Grid container justify="space-evenly" spacing={1}>
              <Grid item md={6} sm={6} xs={12}>
                {/* show  media  */}
                <Paper
                  style={{
                    backgroundImage: `url("/assets/images/placeholder.jpg")`,
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
                <AuthorCard author={{ ...blog }} />
                <Comments {...commentState} />
              </Grid>

              {/* <ClapButton onCountChange={onCountChange} /> */}
            </Grid>
          )}
        </Container>{" "}
        <Message
          message={"Ooops!! something went wrong"}
          show={error}
          type="error"
        />
      </div>
    </DefaultLayout>
  );
}

Blog.getInitialProps = async ({ query }) => {
  const res = await getBlogAndMoreBlogs(query.blogId);
  if (res.error) return { ...res, ...query };

  const blog = res;
  return { ...query, blog };
};
