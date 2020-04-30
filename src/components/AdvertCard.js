import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, CardHeader, Avatar, IconButton } from "@material-ui/core";
import { truncateString, mongoDateFormatter, toThumbnail } from "../utils";

export const AdvertCard = props => {
  /*  const { handleThumbnailClick } = props; */

  const blog = {
    _id: "5e7012c745bdc60024492c04",
    title: "Microsoft Teams",
    mediaUrl:
      "http://res.cloudinary.com/dxcci3wkx/image/upload/v1584404300/ayjkdr1ibfwizugdvgke.jpg",
    content:
      "**Microsoft Teams** is the hub for teamwork in Office 365. Jump in and experience how teams can achieve more together when all their chats, meetings, files and apps live in a single workspace. In this interactive demo, you'll first get a guided tour of Teams to understand the app and learn about key features.↵↵Get Microsoft Teams on all your devices. We have desktop apps for Windows, MacOS, and Linux, as well as mobile apps for iOS and Android. [continue reading..](https://teamsdemo.office.com/)",
    authorId: "vzxZ3dmSALPrs5BdGsjB8aGfubS2",
    authorName: "ricks homes",
    authorAvator: "/static/assets/images/graphics.jpgssssss",
    category: "Technology",
    createdAt: "2020-03-16T23:59:03.469Z",
    updatedAt: "2020-03-17T00:18:21.291Z"
  };

  const useStyles = makeStyles(theme => ({
    card: {
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50%",
      backgroundSize: "cover",
      borderRadius: 5,
      backgroundColor: !blog.mediaUrl && `black`,
      backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ), url(${
            blog.category === "Featured"
              ? blog.mediaUrl
              : toThumbnail(blog.mediaUrl)
          })`,
      boxShadow:
        " 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },

    cardHeader: {
      "& .MuiTypography-root": {
        color: "white"
      },
      "& .MuiTypography-colorTextSecondary": {
        color: "green",
        boxShadow: "0px 14px 80px rgba(3, 3, 40, 0.2)",
        zIndex: 2
      }
    },

    cardContent: {
      textAlign: "center",
      margin: "auto",
      zIndexy: 2,
      color: " rgba(255, 255, 255, 0.7) !important",
      position: "relative",
      maxWidth: "440px",
      minHeight: "280px",
      paddingTop: "40px",
      paddingBottom: "40px",
      padding: "0.9375rem 1.875rem"
    },
    content: {
      // color: "green",
      padding: theme.spacing(3, 2),
      marginTop: -70,
      margin: theme.spacing(0, 2),
      justifyContent: "center"
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.cardContent}>
        <h6 style={{ textTransform: "uppercase" }}>{blog.category}</h6>
        <h3 style={{ textTransform: "capitalize" }}>{blog.title}</h3>
        {blog.category === "Featured" && (
          <p class="jss594"> {truncateString(blog.content, 120)}</p>
        )}

        <Button
          variant="contained"
          color="secondary"
          /*  onClick={handleThumbnailClick(blog)} */
        >
          <span class="MuiButton-label">
            <svg className="MuiSvgIcon-root ">
              <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"></path>
            </svg>
            continue reading
          </span>
        </Button>
      </div>
    </div>
  );
};
