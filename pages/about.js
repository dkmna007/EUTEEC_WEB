import React, { useContext } from "react";
import { Typography, Grid, makeStyles, Divider, Box } from "@material-ui/core/";
import { Container, Header } from "@/components";

/* constants */
import { Constants } from "@/constants/About";
import Head from "next/head";

/* components */
import LocationCard from "@/components/Cards/LocationCard";
import ActivityCard from "@/components/Cards/ActivityCard";
import MembershipCard from "@/components/Cards/MembershipCard";
import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";
import { AboutTags } from "@/components/HeadTags/AboutTags";
import { LoginContext } from "@/context/LoginContext/LoginContext";

const useStyles = makeStyles(theme => ({
  root: {
    // margin: theme.spacing(0, 2)
  },
  subT: {
    fontFamily: '"Roboto Slab", "Times New Roman", serif',
    fontWeight: "700",
    lineHeight: "1.5em"
    // textAlign: "center",
  },
  underline: {
    position: "relative",
    margin: "auto",
    borderBottom: "solid",
    width: 10,
    display: "flex",
    color: theme.palette.primary.dark,
    marginBottom: 10
  },
  logo: {
    height: 90,
    width: 90,
    float: "right"
  },
  subheading: {
    color: theme.palette.primary.dark
  }
}));

const About = () => {
  const classes = useStyles();
  const {
    staticAbout,
    partners,
    activities,
    membership,
    appLogo,
    euteecDescription
  } = Constants();
  const menuProps = useContext(LoginContext);
  return (
    <div>
      <AboutTags />
      <DefaultLayout menuProps={menuProps}>
        <Header
          title={staticAbout.Title}
          subTitle={staticAbout.headerSubTitle}
          Current={staticAbout.Current}
          image={"/assets/images/tech1.jpg"}
        />
        <Container /* background={"#17141d"} */>
          <br />
          {/* MEMBERSHIP*/}
          <Grid container justify="center" spacing={1}>
            <Grid item sm={6} md={6} xs={12}>
              <MembershipCard membership={membership} />
            </Grid>

            {/*LOCATION SECTION */}
            <Grid item sm={6} md={6} xs={12}>
              <LocationCard title={"LOCATION"} />
              <Box>
                <img className={classes.logo} src={appLogo} title="euteec" />
                <Typography variant="inherit">{euteecDescription}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <br />
        <br />
        <Divider />
        <Container
          elevation={0}
          top={2}
          sides={"0px"}
          background={"rgba(255, 255, 255, 0)"}
        >
          {/* TEAM SECTION*/}
          {/* END OF TEAM */}
          <br />
          <Divider />
          <br />

          {/* ACTIVITIES SECTION*/}

          <Grid container justify="space-evenly" spacing={2}>
            <Grid item xs={12}>
              <Typography
                color="primary"
                align="center"
                variant="h6"
                className={classes.subheading}
              >
                ACTIVITIES
              </Typography>
              <div className={classes.underline}></div>
              <br />
            </Grid>
            {activities.map(activity => {
              return (
                <Grid item md={6} sm={12} xs={12}>
                  <ActivityCard title={"ACTIVITIES"} activity={activity} />
                </Grid>
              );
            })}
          </Grid>

          <br />
          <br />
          {/* PARTNERS SECTION */}

          <Grid container justify="center" spacing={1}>
            <Grid item xs={12}>
              <Typography
                color="primary"
                align="center"
                variant="h6"
                className={classes.subheading}
              >
                OUR PARTNERS
              </Typography>
            </Grid>
            <br />
            <Divider />
            {partners.map(partner => {
              return (
                <Grid item={6}>
                  <Typography variant="inherit">
                    {partner.PartnerName}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Container>{" "}
      </DefaultLayout>
    </div>
  );
};

export default About;
