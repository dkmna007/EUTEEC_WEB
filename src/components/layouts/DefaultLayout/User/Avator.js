import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

export const useAvatorStyles = makeStyles(theme => ({
  bigAvatar: {
    width: 60,
    height: 60,
    borderStyle: "solid",
    borderColor: theme.palette.primary.main,
    borderWidth: 1.5
  },
  smallAvator: {
    width: 30,
    height: 30,
    borderStyle: "solid",
    borderColor: theme.palette.secondary.main,
    borderWidth: 1.5
  }
}));
export default function UserAvatar({ size }) {
  const classes = useAvatorStyles();
  const { user } = useSelector(state => state.user);

  return (
    <React.Fragment>
      <Avatar
        alt="user avator"
        src={user && user.photoURL}
        className={size ? classes.smallAvator : classes.bigAvatar}
      />
    </React.Fragment>
  );
}
