import React, { useContext } from "react";
import { Typography, Grid, makeStyles, Divider, Box } from "@material-ui/core/";
import { Container, Header, Message } from "@/components";

/* constants */
import { Constants } from "@/constants/About";

/* components */
import LocationCard from "@/components/Cards/LocationCard";
import ActivityCard from "@/components/Cards/ActivityCard";
import MembershipCard from "@/components/Cards/MembershipCard";
import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";
import { AboutTags } from "@/components/HeadTags/AboutTags";
import { getTeam } from "@/lib/api";
import MemberCard from "@/components/Cards/MemberCard";

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

const About = ({ team, error }) => {
  const classes = useStyles();
  const {
    staticAbout,
    partners,
    activities,
    membership,
    appLogo,
    euteecDescription
  } = Constants();

  return (
    <DefaultLayout>
      <AboutTags />
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
      <Divider />
      <br />
      <Container
        elevation={0}
        top={2}
        sides={"0px"}
        background={"rgba(255, 255, 255, 0)"}
      >
        {/* TEAM SECTION*/}
        <Message
          type="error"
          show={error}
          message="oops!could not load EUTEEC team"
        />
        {team && (
          <>
            <Grid>
              <Typography
                color="primary"
                align="center"
                variant="h5"
                className={(classes.subT, classes.subheading)}
              >
                {staticAbout.subtitle2}
              </Typography>
            </Grid>
            <br /> <br />
            <Grid container justify="space-evenly" spacing={2}>
              <Grid item xs={12}>
                <Typography
                  className={classes.subheading}
                  align="center"
                  variant="h6"
                >
                  OFFICE
                </Typography>
                <div className={classes.underline}></div>
              </Grid>
              <br />
              {team?.map(profiler => {
                return (
                  profiler.membershipCategory === "OFFICE" && (
                    <Grid item md={4} sm={6} xs={12}>
                      <MemberCard profiler={profiler} />
                    </Grid>
                  )
                );
              })}
            </Grid>
            <br /> <br />
            <Grid container justify="space-evenly" spacing={2}>
              <Grid item xs={12}>
                <Typography
                  className={classes.subheading}
                  align="center"
                  variant="h6"
                >
                  ENGINEERS AND DEVELOPERS
                </Typography>
                <div className={classes.underline}></div>
              </Grid>
              <br />
              {team?.map(profiler => {
                return (
                  profiler.membershipCategory ===
                    "ENGINEERS AND DEVELOPERS" && (
                    <Grid item md={4} sm={6} xs={12}>
                      <MemberCard profiler={profiler} />
                    </Grid>
                  )
                );
              })}
            </Grid>
            <br /> <br />
            <Grid container justify="space-evenly" spacing={2}>
              <Grid item xs={12}>
                <Typography
                  className={classes.subheading}
                  align="center"
                  variant="h6"
                >
                  MEMBERS AND LEARNERS
                </Typography>
                <div className={classes.underline}></div>
              </Grid>
              <br />
              {team?.map(profiler => {
                return (
                  profiler.membershipCategory === "MEMBERS AND LEARNERS" && (
                    <Grid item md={4} sm={6} xs={12}>
                      <MemberCard profiler={profiler} />
                    </Grid>
                  )
                );
              })}
            </Grid>
            <br /> <br />
            <Grid container justify="space-evenly" spacing={2}>
              <Grid item xs={12}>
                <Typography
                  className={classes.subheading}
                  align="center"
                  variant="h6"
                >
                  PIONEERS AND ALUMNIS
                </Typography>
                <div className={classes.underline}></div>
              </Grid>
              <br />
              {team?.map(profiler => {
                return (
                  profiler.membershipCategory === "PIONEERS AND ALUMNIS" && (
                    <Grid item md={4} sm={6} xs={12}>
                      <MemberCard profiler={profiler} />
                    </Grid>
                  )
                );
              })}
            </Grid>
          </>
        )}
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
                <Typography variant="inherit">{partner.PartnerName}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>{" "}
    </DefaultLayout>
  );
};
About.getInitialProps = async () => {
  let team;
  const res = await getTeam();
  if (res.error) return res;

  /* verified team */
  team = res.filter(i => {
    return i.isVerified === true;
  });

  team = team.map(
    ({
      userId,
      userAvator,
      name,
      bio,
      profession,
      education,
      membershipCategory
    }) => ({
      userId,
      userAvator,
      name,
      bio,
      profession,
      education,
      membershipCategory
    })
  );

  return { team };
};

export default About;
