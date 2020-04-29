import React from "react";
import { Typography, makeStyles, CardMedia } from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
  media: {
    height: 360,
    borderRadius: 10
  }
}));
export default function MembershipCard({ membership }) {
  const classes = useStyles();

  return (
    <>
      <CardMedia
        className={classes.media}
        image={membership.Img}
        title="members"
      />
      <br />
      <Typography variant="caption">{membership.Title1}</Typography>
      <br />
      <br />
      <Typography color="primary" variant="h6">
        {membership.Title2}
      </Typography>
      <br />
      <Typography variant="inherit">{membership.Paragraph1}</Typography>
    </>
  );
}
