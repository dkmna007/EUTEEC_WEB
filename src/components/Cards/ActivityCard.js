import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function ActivityCard(props) {
  const { activity } = props;
  return (
    <Card className={"MuiPostCard--02"}>
      <CardMedia className={"MuiCardMedia-root"} image={activity.image} />
      <CardContent className={"MuiCardContent-root"}>
        <Typography className={"MuiTypography--date"} variant={"overline"}>
          {activity.date}
        </Typography>
        <Typography
          className={"MuiTypography--heading"}
          variant={"h6"}
          gutterBottom
        >
          {activity.title}
        </Typography>
        <Typography className={"MuiTypography--subheading"}>
          {activity.content}
        </Typography>
        <Button
          /* className={"MuiButton--readMore"} */ variant="contained"
          color="primary"
        >
          Read More
        </Button>
      </CardContent>
    </Card>
  );
}
