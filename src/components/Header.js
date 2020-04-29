import React from "react";
import { Grid, makeStyles } from "@material-ui/core/";

export const Header = props => {
  const { title, image, subTitle } = props;
  const useStyles = makeStyles(theme => ({
    heading: {
      backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      padding: theme.spacing(10, 2)
    },
    title: {
      color: theme.palette.secondary.main,
      fontFamily: '"Roboto Slab", "Times New Roman", serif',
      fontWeight: "700",
      lineHeight: "1.5em",
      textAlign: "center",
      textTransform: "uppercase",
      margin: theme.spacing(4, 0)
    }
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid className={classes.heading}>
        <h1 className={classes.title}>{title}</h1>
        <p style={{ textAlign: "center", color: "white" }}>{subTitle}</p>
      </Grid>
    </React.Fragment>
  );
};
