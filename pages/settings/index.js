import React, { useContext } from "react";
import { Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "@/components";

/* PAGE COMPONENTS */
import { Thumbnail as ManageBlog } from "@/components/Cards/Thumbnail";
import { Thumbnail as ManageProfile } from "@/components/Cards/Thumbnail";
import { Thumbnail as JoinUs } from "@/components/Cards/Thumbnail";
import { Container } from "@/components";
import Zoom from "@material-ui/core/Zoom";
import { useRouter } from "next/router";
import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";
import { setisLoginDialogOpen } from "@/actions/redux-actions";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {}
}));

export default function Settings() {
  const classes = useStyles();
  const router = useRouter();
  const settingsProps = {};
  const { user } = useSelector(state => state.user);

  const dispatch = useDispatch();
  return (
    <DefaultLayout>
      <div className={classes.root}>
        <Header
          title={"SETTINGS"}
          subTitle={
            "A Place for Tech Enthuasists to Share and Discover New Stories"
          }
          // Current={staticAbout.Current}
          image={"https://source.unsplash.com/user/erondu/1600x900"}
        />

        <Container background={"#17141d"}>
          <Grid container justify="center" spacing={1}>
            <Grid item sm={3} md={3} xs={12}>
              <ManageBlog
                handleClick={() => router.push("/settings/manage/user-blogs")}
                title={"Manage Blogs"}
                imgUrl={"/assets/images/blogging.svg"}
                {...settingsProps}
              />
            </Grid>
            <Grid item sm={3} md={3} xs={12}>
              <ManageProfile
                handleClick={() =>
                  router.push("/profile/[userId]", `/profile/${user.uid}`)
                }
                title={"My Profile"}
                imgUrl={"/assets/images/account.svg"}
                {...settingsProps}
              />
            </Grid>
            <Grid item sm={3} md={3} xs={12}>
              <Zoom in={true}>
                <div>
                  <JoinUs
                    handleClick={() => {
                      user
                        ? router.push(
                            "/membership/[action]",
                            "/membership/join"
                          )
                        : dispatch(setisLoginDialogOpen(true));
                    }}
                    title={"Join Us"}
                    imgUrl={"/assets/images/team.svg"}
                    {...settingsProps}
                  />
                </div>
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </div>
    </DefaultLayout>
  );
}
