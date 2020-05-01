import React from "react";
import Mail from "@material-ui/icons/Mail";
import Home from "@material-ui/icons/Home";
import ManageBlogs from "@material-ui/icons/Settings";
import Blog from "@material-ui/icons/Web";
import AboutUs from "@material-ui/icons/People";
import Items from "./ListItems";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
      padding: 0,
      fontSize: "14px"
    }
    //   [theme.breakpoints.down("sm")]: {

    // }
  }
}));

export default function Lists({ handleDrawerToggle }) {
  const classes = useStyles();
  const isDisabled = false;
  return (
    <List className={classes.root}>
      <Items
        iconType={<Home />}
        linkName="HOME"
        linkTo="/"
        action={handleDrawerToggle}
        disabled={isDisabled}
      />
      <Items
        iconType={<AboutUs />}
        linkName="About Us"
        linkTo="/about"
        action={handleDrawerToggle}
        disabled={isDisabled}
      />
      <Items
        iconType={<Mail />}
        linkName="Contact Us"
        linkTo="/contact"
        action={handleDrawerToggle}
        disabled={isDisabled}
      />

      <Items
        iconType={<Blog />}
        linkName="Blog "
        linkTo="/blog"
        action={handleDrawerToggle}
        disabled={isDisabled}
      />

      <Items
        iconType={<ManageBlogs />}
        linkName="Settings "
        linkTo="/settings"
        action={handleDrawerToggle}
        disabled={isDisabled}
      />
    </List>
  );
}
