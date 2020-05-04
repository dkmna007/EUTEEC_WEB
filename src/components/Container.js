import React from "react";
import { Paper, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import EditIcon from "@material-ui/icons/Edit";
export const Container = props => {
  const useStyles = makeStyles(theme => ({
    content: {
      // color: "green",
      background: props.background,
      position: "relative",
      padding: props.sides ? props.sides : theme.spacing(3, 2),
      marginTop: props.top || -70,
      marginBottom: 30,
      margin: theme.spacing(0, 2),
      justifyContent: "center"
    },
    actionButton: {
      borderRadius: "50%",
      width: 20,
      height: 20,
      position: "absolute",
      top: -20,
      right: 350,

      [theme.breakpoints.down("sm")]: {
        right: 1
      }
    }
  }));
  const classes = useStyles();
  const { children, type } = props;
  const router = useRouter();

  return (
    <Paper elevation={props.elevation} className={classes.content}>
      {type && (
        <Button
          variant="contained"
          color="secondary"
          className={classes.actionButton}
          onClick={() =>
            router.push(
              "/my-blogs-dashboard/[action]?blogId=new",
              "/my-blogs-dashboard/create?blogId=new"
            )
          }
        >
          <EditIcon />
        </Button>
      )}
      {children}
    </Paper>
  );
};
