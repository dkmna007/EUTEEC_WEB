import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, CardHeader, Avatar, IconButton } from "@material-ui/core";
import { truncateString, toThumbnail } from "@/utils";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";

export default function BlogCard({
  createdAt,
  author,
  title,
  _id,
  category,
  content,
  mediaUrl
}) {
  const useStyles = makeStyles(theme => ({
    card: {
      width: "100%",
      background: "#17141d",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "50%",
      backgroundSize: "cover",
      borderRadius: 5,
      backgroundColor: !mediaUrl && `black`,
      backgroundImage: `
      linear-gradient(
          rgba(0, 0, 0, 0.5),
          rgba(0, 0, 0, 0)
        ), 
          
          url(${category === "Featured" ? mediaUrl : toThumbnail(mediaUrl)})`,
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
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar
            aria-label="euteec"
            src={author && author.avator}
            className={classes.avatar}
          />
        }
        action={
          <IconButton aria-label="settings">{/* <MoreVert /> */}</IconButton>
        }
        title={author && author.name}
        subheader={formatDistanceToNow(new Date(createdAt), {
          addSuffix: true
        })}
      />
      {/*  */}
      <div className={classes.cardContent}>
        <h6 style={{ textTransform: "uppercase" }}>{category}</h6>
        <h3 style={{ textTransform: "capitalize" }}>{title}</h3>
        {category === "Featured" && (
          <p class="jss594"> {truncateString(content, 120)}</p>
        )}
        <Link href="/blog/[blogId]" as={`/blog/${_id}`}>
          <Button
            variant="contained"
            color="primary"
            // onClick={handleThumbnailClick(blog)}
          >
            Read blog
          </Button>
        </Link>
      </div>
    </div>
  );
}
