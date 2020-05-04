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
import { Overlay, Header, Container, Message } from "@/components";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import CallIcon from "@material-ui/icons/Call";
import EditIcon from "@material-ui/icons/Edit";

import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";

import { getMember } from "@/lib/api";
import { useRouter } from "next/router";

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
  }
}));

function ProfilePage({ userId, error, member }) {
  const classes = useStyles();
  const router = useRouter();
  const profileProps = useProfileState({ userId, error, member });

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
              className={"MuiButton--editProfile"}
              onClick={() => {
                profileProps.canEditProfile
                  ? router.push(
                      `/my-membership-dashboard/[action]?userId=${userId}`,
                      `/my-membership-dashboard/update?userId=${userId}`
                    )
                  : profileProps.handleOpenloginDialog;
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
              {error ? "Offline" : "Online"}
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
              <Button className={"MuiButton--fb"}>
                <FacebookIcon />
              </Button>
              <Button className={"MuiButton--twitter"}>
                <TwitterIcon />
              </Button>
              <Button className={"MuiButton--call"}>
                <CallIcon />
              </Button>
            </CardActions>
          </Card>
        </>
      </div>
    </DefaultLayout>
  );
}

ProfilePage.getInitialProps = async ({ query }) => {
  const res = await getMember(query.userId);

  if (res.error) return { ...res, ...query };

  const member = res[0];

  return { ...query, member };
};

export default ProfilePage;
