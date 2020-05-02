import React, { useContext } from "react";
import { Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import useMembershipState from "@/state/useMembershipState";

/* page components */

import {
  MembershipForm,
  AccountProfile,
  Message,
  StatusDialog,
  Header,
  Overlay,
  Container
} from "@/components";
import { useRouter } from "next/router";
import { Constants } from "@/constants/Membership";
import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";

const useStyles = makeStyles(theme => ({
  content: {
    display: "none"
  }
}));

export default function Membership() {
  const classes = useStyles();
  const router = useRouter();
  const { action } = router.query;

  const memberProps = useMembershipState({ action });

  const { occupation, categories } = Constants();

  const subtitle_1 = "Be part of our team by registering for club membership";
  const subtitle_2 =
    "updating you profile makes it easy for people to get in touch with you";

  return (
    <DefaultLayout>
      <div className={classes.root}>
        <Header
          title={action == "join" ? "JOIN US" : "UPDATE PROFILE"}
          subTitle={action == "join" ? subtitle_1 : subtitle_2}
          image={"https://source.unsplash.com/user/erondu/1600x900"}
        />
        <Container>
          <Overlay
            overlayText={"setting up environment..."}
            isVisible={!memberProps.member || memberProps.isGetUserLoading}
          />

          <Grid
            container
            spacing={2}
            className={
              action === "update" &&
              !(memberProps.userInput.success || memberProps.userInput.error)
                ? null
                : (memberProps.isGetUserLoading ||
                    memberProps.userInput.message ||
                    memberProps.userInput.success ||
                    memberProps.userInput.error) &&
                  classes.content
            }
          >
            <Grid item lg={4} md={6} xl={4} xs={12}>
              {/* profile picture setting */}
              <AccountProfile {...memberProps} />
            </Grid>
            <Grid item lg={8} md={6} xl={8} xs={12}>
              <MembershipForm
                {...{ categories, occupation, action, ...memberProps }}
              />
            </Grid>
          </Grid>
          <Message
            message={memberProps.userInput.message}
            show={action === "join" && memberProps.userInput.message}
            type="info"
            action={memberProps.handleGoBack}
          />
          <Message
            message={memberProps.userInput.success}
            show={memberProps.userInput.success}
            type="success"
            action={memberProps.viewMembershipStatus}
          />
          <Message
            message={memberProps.userInput.error}
            show={memberProps.userInput.error}
            type="error"
            action={memberProps.handleRetry}
          />

          {/* upload monitor */}
          <StatusDialog
            progress={memberProps.uploadingPercentage}
            isloading={memberProps.isUserPostLoading}
            callBack={memberProps.isPostEmailLoading}
            callBackMsg={"notifying euteec admin..."}
          />
        </Container>
      </div>
    </DefaultLayout>
  );
}
