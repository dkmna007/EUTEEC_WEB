import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider } from "@material-ui/core/";
import marked from "marked";
import { formatDistanceToNow } from "date-fns";
const useStyles = makeStyles(theme => ({
  heading: {
    textTransform: "capitalize"
  },

  mediaDetails: {
    padding: 5
    // outlineStyle: "solid",
    // outlineColor: theme.palette.primary.main,
    // outlineWidth: 1
  }
}));

export const MarkDown = ({ content, author, createdAt }) => {
  const classes = useStyles();
  marked.setOptions({
    baseUrl: null,
    breaks: false,
    gfm: true,
    headerIds: true,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: true,
    pedantic: false,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    xhtml: false
  });
  const html = marked(content || "");
  return (
    <>
      <Typography
        gutterBottom
        align="center"
        gutterBottom
        variant="inherit"
        color="primary"
      >
        {`By  ${author && author.name}  ${formatDistanceToNow(
          new Date(createdAt),
          {
            addSuffix: true
          }
        )}`}
      </Typography>

      <Divider />
      {/* <Paper variant="outlined" className={classes.mediaDetails}> */}

      {/* <Typography variant="inherit" component="p"> */}
      <br />
      <div
        dangerouslySetInnerHTML={{
          __html: `<div style="overflow: hidden;">${html}</div>`
        }}
      />
      {/* </Typography> */}
      {/* </Paper> */}
    </>
  );
};
