import React from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400
  }
}));

export const FeedBack = props => {
  const classes = useStyles();

  const {
    action,
    userInput,
    handleRetry,
    handleGoBack,
    viewCreatedBlog
  } = props;

  return (
    <>
      <Grid
        container
        justify="center"
        direction="column"
        className={classes.msg}
        alignItems="center"
      >
        <Grid item xs={6} md={3} sm={3}>
          <img
            src={
              userInput.success
                ? "/assets/images/success.svg"
                : "/assets/images/error.svg"
            }
            alt="Kiwi standing on oval"
            width={"100%"}
          />
        </Grid>
        <br />
        {/* <Grid item xs={5} md={6} sm={12}>
          <Typography variant="h6"> */}
        <div style={{ textAlign: "center" }}>
          <h6>{userInput.success || userInput.error}</h6>
        </div>

        {/* </Typography>
        </Grid> */}
      </Grid>
      <br />
      <Grid container justify="center" spacing={1}>
        <Grid item>
          {userInput.success && (
            <Button variant="outlined" onClick={viewCreatedBlog}>
              View
            </Button>
          )}
        </Grid>
        {userInput.success && action === "create" ? (
          <Grid item>
            <Button onClick={handleGoBack} variant="outlined">
              Create a new blog
            </Button>
          </Grid>
        ) : userInput.success && action === "update" ? (
          <Grid item>
            <Button onClick={handleGoBack} variant="outlined">
              Edit Again
            </Button>
          </Grid>
        ) : userInput.success && action === "join" ? null : userInput.error ? (
          <Grid item>
            <Button onClick={handleRetry} variant="outlined">
              Try Again
            </Button>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};
