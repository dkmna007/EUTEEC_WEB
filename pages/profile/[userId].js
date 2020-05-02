import React, { useContext } from "react";
import {
  Paper,
  Grid,
  Divider,
  Avatar,
  Button,
  Typography,
  CardContent,
  Card,
  CardActions
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useProfileState from "@/state/useProfileState";
import { Overlay, Header, Container } from "@/components";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import CallIcon from "@material-ui/icons/Call";
import EditIcon from "@material-ui/icons/Edit";
import { useRouter } from "next/router";
import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`
  },
  name: {
    textAlign: "center"
  },
  textBlock: {
    margin: "1.071rem auto 0",
    maxWidth: "600px",
    color: "#999",
    textAlign: "center !important"
  },

  /* alt styles */
  avator: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    position: "relative",
    margin: "auto",
    // border: `solid 1px ${theme.palette.main.primary}`,
    marginTop: -100,
    marginBottom: 15,
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)"
  },
  buttonFb: {
    border: "none",
    padding: 0,

    "&:hover": {
      backgroundColor: "transparent"
    },
    "& .MuiButton-label": {
      color: "blue"
    },
    "& .MuiTouchRipple-root": {
      color: "blue"
    }
  },
  buttonTwitter: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    },
    "& .MuiButton-label": {
      color: "rgb(29,161,242)"
    },
    "& .MuiTouchRipple-root": {
      color: "rgb(29,161,242)",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "block",
      zIndex: 0,
      overflow: "hidden",
      position: "absolute",
      borderRadius: "inherit",
      pointerEvents: "none"
    }
  },
  buttonCall: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    },
    "& .MuiButton-label": {
      color: "green"
    },
    "& .MuiTouchRipple-root": {
      color: "green"
    }
  },
  buttonEdit: {
    borderRadius: "50%",
    width: 20,
    height: 20,
    position: "absolute",
    top: -20,
    right: 350,

    [theme.breakpoints.down("sm")]: {
      right: 1
    }
  }
}));

function ProfilePage() {
  const classes = useStyles();
  const { handleLogIn, user } = useContext(LoginContext);
  const router = useRouter();
  const { userId } = router.query;
  const profileProps = useProfileState({ userId });

  return (
    <DefaultLayout>
      <div>
        <Header
          // title={"PROFILE"}
          // subTitle={"eutecc club"}
          image={"https://source.unsplash.com/user/erondu/1600x900"}
        />

        <>
          <Card className={"PeaFullProfileCard-root"}>
            <Avatar
              className={"MuiAvatar-root"}
              src={profileProps.userInput.userAvator}
              title="member"
            />
            <Button
              variant="contained"
              color="secondary"
              className={classes.buttonEdit}
              onClick={() => {
                user &&
                profileProps &&
                user.uid === profileProps.userInput.userId
                  ? router.push("/membership/update")
                  : handleLogIn();
              }}
            >
              <EditIcon />
            </Button>
            <Button
              size="small"
              variant="contained"
              color="primary"
              className={"MuiButton--viewProfile"}
            >
              Offline
            </Button>
            <CardContent className={"MuiCardContent-root"}>
              <Typography
                color="secondary"
                className={classes.title}
                gutterBottom
                align="center"
                variant="h5"
                component="h2"
              >
                {profileProps.userInput.name}
              </Typography>
              <Typography
                gutterBottom
                align="center"
                variant="subtitle2"
                component="h4"
              >
                {profileProps.userInput.profession}
              </Typography>
              <br />
              <Typography
                color="secondary"
                className={classes.title}
                gutterBottom
                align="center"
                variant="h5"
                component="h2"
              >
                Biography
              </Typography>
              <Typography
                variant="inherit"
                color="textSecondary"
                align="center"
                component="p"
              >
                " {profileProps.userInput.bio}"
              </Typography>
              <br />
              <Typography
                color="secondary"
                className={classes.title}
                gutterBottom
                align="center"
                variant="h5"
                component="h2"
              >
                Hobbies
              </Typography>
              <Typography
                variant="inherit"
                color="textSecondary"
                align="center"
                component="p"
              >
                {profileProps.userInput.hobbies}
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <Button className={classes.buttonFb}>
                <FacebookIcon />
              </Button>
              <Button className={classes.buttonTwitter}>
                <TwitterIcon />
              </Button>
              <Button className={classes.buttonCall}>
                <CallIcon />
              </Button>
            </CardActions>
          </Card>
        </>
      </div>
    </DefaultLayout>
  );
}

export default ProfilePage;
