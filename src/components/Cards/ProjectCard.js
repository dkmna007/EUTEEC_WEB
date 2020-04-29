import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core/";

export const ProjectCard = props => {
  const { project } = props;

  return (
    <Card className={"PeaProjectCard-root"}>
      <CardMedia
        className={"MuiCardMedia-root"}
        image={project.mediaUrl}
        title="Euteec club"
      />
      <CardContent className={"MuiCardContent-root"}>
        <Typography className={"MuiTypography--heading"}>
          {project.title}
        </Typography>
        <Typography className={"MuiTypography--paragraph"}>
          {project.content}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
