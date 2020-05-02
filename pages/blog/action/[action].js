import React from "react";
import { Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import { Header, Overlay } from "@/components";
import useBlogState from "@/state/useBlogState";

/* page components */

import MarkDownEditor from "@/components/Editor/MarkDownEditor";
import Form from "@/components/Form/Form";
import DropZone from "@/components/DropZone/DropZone";
import { Message, StatusDialog } from "@/components";
import { useRouter } from "next/router";
import { Constants } from "@/constants/Blog";
import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";
import { setisLoginDialogOpen } from "@/actions/redux-actions";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    // color: "green",
    padding: theme.spacing(3, 2),
    marginTop: -70,
    margin: theme.spacing(0, 2),
    justifyContent: "center"
  },
  button: {
    marginTop: theme.spacing(-1)
  }
}));

export default function CreateBlog() {
  const classes = useStyles();
  const router = useRouter();
  const { action, blogId } = router.query;
  const blogProps = useBlogState({ action, blogId });
  const { categories } = Constants();
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
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

        <Paper className={classes.content}>
          {!(blogProps.userInput.success || blogProps.userInput.error) ? (
            <>
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
                      !user
                        ? dispatch(setisLoginDialogOpen(true))
                        : blogProps.handleBlogSave();
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
            </>
          ) : (
            <>
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
                action={blogProps.handleRetry}
              />
            </>
          )}
        </Paper>
      </div>
      <Overlay isVisible={!blogProps.blog} overlayText={"just a moment..."} />
    </DefaultLayout>
  );
}
