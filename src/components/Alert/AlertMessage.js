import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(5)
    }
  }
}));

export default function MessageAlerts({
  success,
  error,
  warning,
  info,
  variant
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {error ? (
        <Alert variant={variant} severity="error">
          {error}
        </Alert>
      ) : null}
      {warning ? (
        <Alert variant={variant} severity="warning">
          {warning}
        </Alert>
      ) : null}
      {info ? (
        <Alert variant={variant} severity="info">
          {info}
        </Alert>
      ) : null}
      {success ? (
        <Alert variant={variant} severity="success">
          {success}
        </Alert>
      ) : null}
    </div>
  );
}
