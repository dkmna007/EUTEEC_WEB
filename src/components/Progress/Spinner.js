import React from "react";
import { CircularProgress } from "@material-ui/core";

export default function Spinner({ active, children }) {
  if (!Boolean(active)) return null;

  return (
    <div
      style={{
        // height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: 270,
      }}
    >
      <div>
        <CircularProgress />
      </div>
      <br />
      <div>{children}</div>
    </div>
  );
}
