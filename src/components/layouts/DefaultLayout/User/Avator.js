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
  }
}));
export default function UserAvatar({ size }) {
  const classes = useAvatorStyles();
  // const { user } = useSelector(state => state.user);
  const user = "";
  return (
    <React.Fragment>
      <Avatar
        alt="Remy Sharp"
        src={user && user.photoURL}
        className={size ? null : classes.bigAvatar}
      />
    </React.Fragment>
  );
}
