import React from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RefreshIcon from "@material-ui/icons/Refresh";
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400
  },
  msg: {
    display: "none"
  }
}));

export const Message = ({ message, show, type, action }) => {
  const classes = useStyles();

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
      <Button
        endIcon={<RefreshIcon />}
        onClick={() =>
          action
            ? action()
            : typeof location !== "undefined" && location.reload()
        }
        color="secondary"
        variant="text"
      >
        {btTxt}
      </Button>
    </Grid>
  );
};
