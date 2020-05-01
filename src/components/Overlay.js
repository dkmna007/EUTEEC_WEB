import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  backdrop: {
    // background: "#17141d",
    zIndex: theme.zIndex.drawer + 1,
    // color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  }
}));

export const Overlay = ({ overlayText, isVisible }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <Backdrop className={classes.backdrop} open={isVisible}>
        <CircularProgress color="primary" />
        <br />
        <Typography align="center">{overlayText}</Typography>
      </Backdrop>
    </div>
  );
};
