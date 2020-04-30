import React from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400
  },
  msg: {
    display: "none"
  }
}));

export const Message = props => {
  const classes = useStyles();
  const { message, show, type, action } = props;

  const btTxt =
    (type === "info" && "Go Back") ||
    (type === "success" && "View Status") ||
    (type === "error" && "Try Again");

  return (
    <Grid
      container
      justify="center"
      direction="column"
      className={show ? null : classes.msg}
      alignItems="center"
    >
      <Grid item xs={6} md={3} sm={3}>
        <img src={`/assets/images/${type}.svg`} alt="message" width={"100%"} />
      </Grid>
      <br />

      <div style={{ textAlign: "center" }}>
        <h6>{message || "Somthing is not right"}</h6>
      </div>
      <br />
      <Button onClick={() => action()} variant="contained">
        {btTxt}
      </Button>
    </Grid>
  );
};
