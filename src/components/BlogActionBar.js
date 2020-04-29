import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core/";
import { Share } from "@material-ui/icons/";
import BlogShare from "./BlogShare";
const useStyles = makeStyles(theme => ({
  actionBar: {
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-evenly",

    marginTop: 1,
    marginBottom: 5
  },
  actionBarItem: {
    // flexGrow: 1
  }
}));

export default function BlogActionBar(props) {
  const classes = useStyles();
  const { blog } = props;
  return (
    <div className={classes.actionBar}>
      {/* <span className={classes.actionBarItem}>
        <IconButton aria-label="add to favorites" style={{ color: "green" }}>
          <AddComment />
        </IconButton>
        234
      </span> */}

      <span className={classes.actionBarItem}>
        <BlogShare blog={blog}>
          <IconButton aria-label="share" style={{ color: "green" }}>
            <Share />
          </IconButton>
        </BlogShare>
      </span>
      {/* <span className={classes.actionBarItem}>
        <IconButton style={{ color: "green" }}>
          <Visibility />
        </IconButton>
        23526
      </span> */}
    </div>
  );
}
