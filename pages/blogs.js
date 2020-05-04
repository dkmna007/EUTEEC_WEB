import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

/* state */
import useBlog from "@/state/useBlog";

/* page components */
import CustomTabs from "@/components/Tabs/CustomTabs";
import BlogCard from "@/components/Cards/BlogCard";
import { Header, Container, Message } from "@/components";
import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";
/* constants */
import { Constants } from "@/constants/Blog";

/* api-calls */
import { getAllBlogsWithSlug } from "@/lib/api";

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(0, 2)
  },
  tabs: {
    margin: theme.spacing(5, 0)
  }
}));

function BlogPage({ blogs, error }) {
  const classes = useStyles();
  const { tabs, featured } = Constants();
  const { handleThumbnailClick, handleTabClick, userInput } = useBlog({
    error
  });

  const blogProps = {
    tabs,
    activeTab: userInput.activeTab,
    handleTabClick,
    handleThumbnailClick
  };

  return (
    <DefaultLayout>
      <div>
        <Header
          title={"BLOGS"}
          subTitle={
            "A Place for Tech Enthuasists to Share and Discover New Stories"
          }
          // Current={staticAbout.Current}
          image={"https://source.unsplash.com/user/erondu/1600x900"}
        />
        <Container background={"#17141d"} type={"blog"}>
          {/* Blog Tabs */}
          <Grid
            className={classes.tabs}
            container
            justify="center"
            alignContent="center"
            alignItems="center"
            spacing={1}
          >
            <CustomTabs {...blogProps} />
          </Grid>
        </Container>

        {/* blogs  thumbnails*/}

        <Container
          elevation={0}
          top={2}
          sides={"0px"}
          background={"rgba(255, 255, 255, 0)"}
        >
          <Grid
            container
            spacing={4}
            justify="center"
            alignItems="center"
            direction="row"
            className={classes.content}
          >
            {blogs &&
              blogs.map(blog => {
                return (
                  (userInput.activeTab === blog.category ||
                    userInput.activeTab === "All") && (
                    <Grid item sm={6} md={6} xs={12}>
                      <BlogCard key={blog.title} blog={blog} {...blogProps} />
                    </Grid>
                  )
                );
              })}
          </Grid>

          <br />
          {/* loading overlay */}
          <Message
            type="error"
            message={userInput.error}
            show={userInput.error}
          />
        </Container>
      </div>
    </DefaultLayout>
  );
}
/**
 *
 *
 * configure page to be statically generated
 *
 *
 */
BlogPage.hasStaticProps = true;

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const res = await getAllBlogsWithSlug();
  if (res.error) return { props: { ...res } };

  const blogs = res;

  // By returning { props: blogs }, the Blog component
  // will receive `blogs` as a prop at build time
  return {
    props: {
      blogs
    }
  };
}

export default BlogPage;
