import React from "react";
import { Circle } from "rc-progress";
import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle
} from "@material-ui/core";

export const StatusDialog = ({
  progress,
  isloading,
  callBack,
  callBackMsg
}) => {
  return (
    <div>
      <div>
        <Dialog
          open={isloading || callBack}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            {progress ? (
              <div
                style={{
                  width: "10%",
                  paddingTop: 50,
                  paddingRight: 100,
                  paddingLeft: 100
                }}
              >
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
            ) : (
              <div
                style={{ paddingTop: 50, paddingRight: 100, paddingLeft: 100 }}
              >
                <CircularProgress />
              </div>
            )}
          </DialogContent>
          <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
            {(callBack && callBackMsg) || "loading..."}
          </DialogTitle>
        </Dialog>
      </div>
    </div>
  );
};
