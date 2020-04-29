import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center"
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative"
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  },

  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
}));

export default function ProgressButton({
  handleButtonClick,
  loading,
  id,
  startIcon,
  size,
  lable,
  color,
  style
}) {
  const classes = useStyles();
  const buttonClassname = clsx({
    [classes.buttonSuccess]: loading
  });

  return (
    <div className={classes.wrapper}>
      <Button
        disabled={loading ? true : null}
        size={size}
        variant="contained"
        color={color}
        style={style}
        className={buttonClassname}
        onClick={handleButtonClick}
        startIcon={startIcon}
      >
        {lable
          ? lable
          : id === "update"
          ? "Update"
          : id === "delete"
          ? "Delete"
          : "Save"}
      </Button>
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
}
