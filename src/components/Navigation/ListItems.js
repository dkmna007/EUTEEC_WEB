import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Link from "next/link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiListItemText-primary": {
      fontSize: "1rem",
      fontWeight: "bold",
      lineHeight: 0
    },

    [theme.breakpoints.up("md")]: {
      margin: 8,
      background: "rgba(255, 255, 255, 0)",
      borderRadius: 5,
      padding: 1,

      width: "auto",
      "&.Mui-selected": {
        background: "rgba(255, 255, 255, 0)",

        borderRadius: 5,
        padding: 1,
        "&:hover": {
          borderRadius: 5,
          padding: 1
          // backgroundColor: theme.palette.grey[400]
        },
        "& .MuiListItemText-root": {
          color: theme.palette.secondary.main
        },
        "& .MuiListItemIcon-root": {
          color: theme.palette.secondary.main
        }
      },
      "& .MuiListItemText-primary": {
        fontSize: "1rem",
        fontWeight: "bold",
        // fontFamily: `'Pacifico', cursive`,
        lineHeight: 0
      },
      "& .MuiListItemIcon-root": {
        display: "flex",
        minWidth: 25,
        flexShrink: 0
      },

      "&:hover": {
        borderRadius: 5,
        padding: 1,
        "& .MuiListItemText-root": {
          color: theme.palette.secondary.main
        },
        "& .MuiListItemIcon-root": {
          color: theme.palette.secondary.main
        }
      }
    },
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: theme.palette.secondary.main,
      "&.Mui-selected": {
        backgroundColor: theme.palette.grey[100],
        "&:hover": {
          backgroundColor: theme.palette.grey[300]
        },
        "& .MuiListItemText-root": {
          color: theme.palette.primary.main
        },
        "& .MuiListItemIcon-root": {
          color: theme.palette.primary.main
        }
      }
    }
  }
}));
const Items = (iconType, linkName, linkTo, action_1, disabled) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <Link href={linkTo}>
      <ListItem
        className={classes.root}
        button
        //  component={NavLink}
        selected={router.pathname === linkTo}
        to={linkTo}
        disabled={disabled}
      >
        <ListItemIcon>{iconType}</ListItemIcon>
        <ListItemText primary={linkName} />
      </ListItem>
    </Link>
  );
};

export default Items;
