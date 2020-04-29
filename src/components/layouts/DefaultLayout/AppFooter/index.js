/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Favorite from "@material-ui/icons/Favorite";
import Fab from "@material-ui/core/Fab";
import styles from "./footerStyle.js";
import { ScrollTop } from "@/hocs/ScrollTop.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,

    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer /* className={footerClasses} */>
      {/* <div className={classes.container}>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            // href="https://www.creative-tim.com?ref=njsmk-footer"
            className={aClasses}
            target="_blank"
          >
            RickHomes and Dominic
          </a>{" "}
        </div>
      </div> */}
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
