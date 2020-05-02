import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Toolbar,
  IconButton,
  AppBar,
  Button,
  Avatar,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import LogoutMenu from "./Menu";
import AddIcon from "@material-ui/icons/Add";
import classNames from "classnames";
import PropTypes from "prop-types";
import Hidden from "@material-ui/core/Hidden";
import Lists from "@/components/Navigation/Lists";
import AppBarStyle from "./jss/AppBarStyle";

const useStyles = makeStyles(theme => AppBarStyle);

export default function AppBarHeader(props) {
  const classes = useStyles();

  const { handleDrawerToggle, color, brand, fixed, absolute } = props;
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  const brandComponent = <Typography variant="h6">{brand}</Typography>;
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <IconButton color="inherit" aria-label="open drawer" edge="start">
            <Avatar
              src="/assets/images/techlogo.png"
              className={classes.logo}
            />
          </IconButton>
        </Hidden>
        <div className={classes.flex}>{brandComponent}</div>
        {/* AppBar NavList */}
        <Hidden mdDown>
          <Lists />
        </Hidden>
        {/* Logout Menu */}
        <LogoutMenu />
      </Toolbar>
    </AppBar>
  );
}
AppBar.defaultProp = {
  color: "white"
};

AppBar.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),

  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};
