import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { Header, Overlay, Container } from "@/components";
import useBlogState from "@/state/useBlogState";

/* page components */
import CustomTabs from "@/components/Tabs/CustomTabs";
import BlogCard from "@/components/Cards/BlogCard";

import Error from "@/components/FeedBack/Error";
/* constants */

import { Constants } from "@/constants/Blog";
import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";
import { LoginContext } from "@/context/LoginContext/LoginContext";

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(0, 2)
  },
  tabs: {
    margin: theme.spacing(5, 0)
  }
}));

export default function BlogPage() {
  const classes = useStyles();
  const { tabs, featured } = Constants();
  const {
    blogsFetchError,
    isLoadingBlogs,
    blogs,
    handleThumbnailClick,
    handleTabClick,
    userInput
  } = useBlogState({ action: "getAll" });

  const blogProps = {
    tabs,
    activeTab: userInput.activeTab,
    handleTabClick,
    handleThumbnailClick
  };
  const menuProps = useContext(LoginContext);

  return (
    <DefaultLayout menuProps={menuProps}>
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
          <Overlay overlayText="Loading Blogs..." isVisible={isLoadingBlogs} />
          {blogsFetchError && <Error userInput={userInput} />}
        </Container>
      </div>
    </DefaultLayout>
  );
}
