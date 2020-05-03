import React from "react";
import { Button, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import { Header, Container } from "@/components";
import useBlogState from "@/state/useBlogState";

/* page components */

import MarkDownEditor from "@/components/Editor/MarkDownEditor";
import Form from "@/components/Form/Form";
import DropZone from "@/components/DropZone/DropZone";
import { Message, StatusDialog } from "@/components";

import { Constants } from "@/constants/Blog";
import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";
import { getBlog } from "@/lib/api";

const useStyles = makeStyles(theme => ({
  root: {},

  button: {
    marginTop: theme.spacing(-1)
  }
}));

export default function CreateBlog({ action, blogId, error, blog }) {
  const classes = useStyles();
  const blogProps = useBlogState({ action, blogId, error, blog });
  const { categories } = Constants();

  return (
    <DefaultLayout>
      <div className={classes.root}>
        <Header
          title={`${action} BLOG`}
          subTitle={
            "A Place for Tech Enthuasists to Share and Discover New Stories"
          }
          // Current={staticAbout.Current}
          image={"https://source.unsplash.com/user/erondu/1600x900"}
        />

        <Container background="#17141d">
          <Box /* component="span" */ display={blogProps.isBlogFormVisible}>
            <Grid container justify="center" spacing={1}>
              <Grid item md={6} sm={6} xs={12}>
                {/* General blog information */}
                <Form categories={categories} {...blogProps} />

                {/* DropZone */}
                <DropZone
                  dropzoneText={blogProps.userInput.mediaUrl}
                  maxFileSize={9000000}
                  filesLimit={1}
                  lable={"Additional File"}
                  acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                  // initialFiles={userInput.mediaUrl}
                  handleFileChange={blogProps.handleFileChange}
                />
              </Grid>

              {/* upload monitor */}
              <StatusDialog
                progress={blogProps.uploadingPercentage}
                isloading={blogProps.isBlogPostPutLoading}
              />

              {/* Post Content */}
              <Grid item md={6} sm={6} xs={12}>
                <MarkDownEditor {...blogProps} />
              </Grid>
            </Grid>

            <Grid
              container
              justify="flex-end"
              alignItems="center"
              spacing={1}
              style={{ paddingTop: 2 }}
            >
              <Grid item>
                <Button
                  startIcon={<SaveIcon />}
                  variant="contained"
                  color="secondary"
                  disabled={blogProps.isBlogPostPutLoading}
                  onClick={() => {
                    blogProps.canPostBlog
                      ? blogProps.handleBlogSave()
                      : blogProps.handleOpenLoginDialog();
                  }}
                  className={classes.button}
                >
                  {blogProps.progress
                    ? "Saving..."
                    : action === "update"
                    ? "Update"
                    : "Save"}
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Message
            message={blogProps.userInput.success}
            show={blogProps.userInput.success}
            type="success"
            action={blogProps.viewCreatedBlog}
          />
          <Message
            message={blogProps.userInput.error}
            show={blogProps.userInput.error}
            type="error"
            action={action === "create" && blogProps.handleRetry}
          />
        </Container>
      </div>
    </DefaultLayout>
  );
}
CreateBlog.getInitialProps = async ({ query }) => {
  let { blogId, action } = query;

  if (action === "update") {
    const res = await getBlog(blogId);

    if (res.error) return { ...res, ...query };

    return { ...query, blog: res };
  }
  return { ...query };
};
