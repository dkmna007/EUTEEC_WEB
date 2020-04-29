import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
// import moment from "moment";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: "flex"
  },
  avatar: {
    marginLeft: "auto",
    height: 110,
    width: 110,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    flexGrow: 1
  },
  input: {
    display: "none"
  }
}));

export const AccountProfile = props => {
  const {
    className,
    userInput,
    handleFormChange,
    handleUserAvatorChange,
    handleResetProfilePic,
    ...rest
  } = props;

  const classes = useStyles();

  const user = {
    name: userInput.name,
    city: "Nairobi",
    country: "Kenya",
    note: " changing profile picture has been enabled ",
    avatar: userInput.userAvator
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography gutterBottom variant="h6">
              {user.name}
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              {user.city}, {user.country}
            </Typography>
            <Typography gutterBottom variant="caption">
              {user.note}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {/* {moment().format("hh:mm A")} ({user.timezone}) */}
            </Typography>
          </div>{" "}
          <Avatar src={user.avatar} className={classes.avatar} />
        </div>
        <div className={classes.progress}>
          <Typography variant="body1">
            Profile Completeness: {`${userInput.profileCompletess}%`}
          </Typography>
          <LinearProgress
            value={userInput.profileCompletess}
            variant="determinate"
          />
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        <div>
          <input
            name="userAvator"
            accept="image/*"
            // defaultValue="Bob"
            className={classes.input}
            id="icon-button-file"
            type="file"
            onChange={handleUserAvatorChange}
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </div>

        <Button variant="outlined" onClick={handleResetProfilePic}>
          Remove picture
        </Button>
      </CardActions>
    </Card>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};
