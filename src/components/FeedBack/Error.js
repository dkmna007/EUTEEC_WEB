import React from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400
  }
}));

export default function Error(props) {
  const classes = useStyles();

  const { userInput } = props;

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
            src={"/assets/images/serverdown.svg"}
            alt="Kiwi standing on oval"
            width={"100%"}
          />
        </Grid>
        <br />
        {/* <Grid item xs={5} md={6} sm={12}>
          <Typography variant="h6"> */}
        <div style={{ textAlign: "center" }}>
          <h6>{userInput.error || "Server Down"}</h6>
        </div>

        {/* </Typography>
        </Grid> */}
      </Grid>
      <br />
      <Grid container justify="center" spacing={1}>
        <Grid item>
          <Button onClick={() => location.reload()} variant="outlined">
            Try Again
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
