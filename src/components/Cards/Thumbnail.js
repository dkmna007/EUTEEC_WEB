import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, ButtonBase, Grid } from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.dark,
    height: 200,
    border: `solid 1px ${theme.palette.primary.main} `,
    borderRadius: 10,
    outlineColor: theme.palette.divider,
    overflow: "hidden",
    transition: "0.4s",
    "&:hover": {
      zIndex: 10,
      "& $image": {
        // opacity: 0.15
        // zIndex: 6
      },
      transform: "scale(1.2)" /* Equal to scaleX(0.7) scaleY(0.7) */
    }
  },

  image: {
    width: "100%"
    // zIndex: 5
    // "&:hover, &$focusVisible": {
    //   zIndex: 3,
    //   "& $imageBackdrop": {
    //     opacity: 0.15
    //   },
    //   "& $imageMarked": {
    //     opacity: 0
    //   },
    //   "& $imageTitle": {
    //     border: "4px solid currentColor"
    //   }
    // }
  },

  imageTitle: {
    fontWeight: 700,
    top: 0,
    // textShadow: "2px 2px 2px #1b5e20",
    position: "absolute",
    background: `linear-gradient(#1b5e20, transparent, transparent), no-repeat center`
  }
}));

export function Thumbnail({ handleClick, title, imgUrl }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonBase onClick={handleClick}>
        <Grid container>
          <Grid item md={12} sm={12} xs={12}>
            <img src={imgUrl} className={classes.image} />
          </Grid>
        </Grid>

        <Typography variant="h4" color="primary" className={classes.imageTitle}>
          {title}
        </Typography>
      </ButtonBase>
    </div>
  );
}
