import React from "react";
import {
  Avatar,
  ListItemText,
  ListItemIcon,
  ListItem,
  Link
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: 20
  },
  userAvator: {}
}));
export const LinkCard = props => {
  const { link } = props;
  const classes = useStyles();

  return (
    <ListItem button>
      <ListItemIcon>
        <Avatar className={classes.avatar} src={link.avatar} />
      </ListItemIcon>
      <ListItemText>
        <Link
          className={classes.link}
          to={link.href}
          //onClick={action_2 ? action_2 : action_1}
        >
          {link.name}
        </Link>
      </ListItemText>
    </ListItem>
  );
};
