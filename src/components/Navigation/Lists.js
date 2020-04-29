import React from "react";
import Mail from "@material-ui/icons/Mail";
import Home from "@material-ui/icons/Home";
import ManageBlogs from "@material-ui/icons/Settings";
import Blog from "@material-ui/icons/Web";
import AboutUs from "@material-ui/icons/People";
import Items from "./ListItems";
import List from "@material-ui/core/List";

export default function Lists({ handleDrawerClose, ...rest }) {
  const isDisabled = false;
  return (
    <List {...rest}>
      {Items(<Home />, "HOME", "/", handleDrawerClose, isDisabled)}
      {Items(<AboutUs />, "About Us", "/about", handleDrawerClose, isDisabled)}
      {Items(<Mail />, "Contact Us", "/contact", handleDrawerClose, isDisabled)}

      {Items(<Blog />, "Blog ", "/blog", handleDrawerClose, isDisabled)}

      {Items(
        <ManageBlogs />,
        "settings ",
        "/settings",
        handleDrawerClose,
        isDisabled
      )}
    </List>
  );
}
