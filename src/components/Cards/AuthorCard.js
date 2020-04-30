import React from "react";
import Card from "@material-ui/core/Card";
import { Avatar, Button } from "@material-ui/core";
import { truncateString } from "@/utils";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
  card: {
    padding: 5,
    position: "relative",
    marginTop: 20
  },
  button: {
    float: `right`,
    margin: `15px 5px 15px 5px`
  },
  name: {
    color: theme.palette.secondary.main,
    marginTop: `.625rem`,
    minHeight: `auto`,
    fontFamily: `Roboto Slab", "Times New Roman, serif`,
    fontWeight: 700,
    marginBottom: `0.75rem`,
    textDecoration: `none`
  },
  avator: {
    margin: `15px 15px 15px 0px`,
    float: `left`,
    boxShadow: `0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)`,
    height: 80,
    width: 80
  }
}));

export const AuthorCard = ({ author }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Avatar className={classes.avator} src={author && author.avator} />
      <p>
        <Link href={`/profile/${author && author.id}`}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Follow
          </Button>
        </Link>
        <h5 className={classes.name}>{author && author.name}</h5>

        {truncateString(author && author.bio, 100)}
        {/* <strong>
        <br style="clear: both;" />
      </strong> */}
      </p>
    </Card>
  );
};
