import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareCount,
  FacebookShareCount,
  InstapaperShareCount,
  LinkedinShareCount,
  TelegramShareCount,
  TwitterShareCount,
  WhatsappShareCount,
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
  TelegramIcon,
  TwitterIcon
} from "react-share";

const useStyles = makeStyles(theme => ({
  shares: {
    padding: 1,
    // backgroundColor: "white",
    // border: "solid 1px grey ",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1,
    marginBottom: 5
  },
  shareItem: {
    flexGrow: 1
  }
}));

export default function BlogShare(props) {
  const { children, blog } = props;
  const classes = useStyles();

  return (
    <div className={classes.shares}>
      {/* {children}  */}
      <FacebookShareButton
        url={window.location.href}
        quote={blog.title || ""}
        className={classes.shareItem}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        url={window.location.href}
        title={blog.title || ""}
        className={classes.shareItem}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton
        url={window.location.href}
        title={blog.title || ""}
        separator=":: "
        className={classes.shareItem}
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <TelegramShareButton
        url={window.location.href}
        title={blog.title}
        className={classes.shareItem}
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <EmailShareButton
        url={window.location.href}
        subject={blog.title || ""}
        body="body"
        className={classes.shareItem}
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
}
