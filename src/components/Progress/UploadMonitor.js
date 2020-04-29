import React from "react";
import { Circle } from "rc-progress";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));
const UploadMonitor = ({ progress }) => {
  const classes = useStyles();
  return (
    <div>
      <Backdrop className={classes.backdrop} open={progress ? true : false}>
        <div style={{ width: "20%" }}>
          <Circle
            percent={progress}
            strokeWidth="4"
            strokeLinecap="round"
            strokeColor={{
              "100%": "#108ee9",
              "0%": "#87d068"
            }}
            trailWidth="1"
          />
        </div>
        <span style={{ position: "absolute" }}>
          <b>{Math.trunc(progress)}%</b>
        </span>
      </Backdrop>
    </div>
  );
};
export default UploadMonitor;
