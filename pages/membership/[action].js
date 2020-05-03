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
import { Constants } from "@/constants/Membership";
import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";
import { getMember } from "@/lib/api";

const useStyles = makeStyles(theme => ({
  content: {
    display: "none"
  }
}));

export default function Membership({ member, action, error }) {
  const classes = useStyles();

  const memberProps = useMembershipState({ action, member, error });

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
          {/* <Overlay
            overlayText={"setting up environment..."}
            isVisible={!member}
          /> */}

          <Grid
            container
            spacing={2}
            className={memberProps.isFormVisible && classes.content}
          >
            {/* profile picture setting */}
            <Grid item lg={4} md={6} xl={4} xs={12}>
              <AccountProfile {...memberProps} />
            </Grid>

            {/* Membership input Form */}
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

Membership.getInitialProps = async ({ query }) => {
  const res = await getMember(query.userId);

  if (res.error) return { ...res, ...query };

  const member = res[0];

  return { ...query, member };
};
