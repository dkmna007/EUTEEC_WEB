import React, { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { increment, decrement } from "../src/actions";
import { Grid, Typography, Divider } from "@material-ui/core";

/* page components */
import { LinkCard, ProjectCard, Container, CarouselAuto } from "@/components";

import { ListCard as Specialisation } from "@/components/Cards/ListCard";
import { ListCard as Activities } from "@/components/Cards/ListCard";

/* constants */
import { Constants } from "@/constants/Home";
import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";
import { HomeTags } from "@/components/HeadTags/HomeTags";
import { LoginContext } from "@/context/LoginContext/LoginContext";

const useStyles = makeStyles(theme => ({
  headings: {
    margin: theme.spacing(3, 0)
  }
}));

const Index = props => {
  const { counter, increment, decrement } = props;
  const classes = useStyles();
  const {
    homepage,
    specialisation_data,
    activities_data,
    app_links,
    projects
  } = Constants();
  const menuProps = useContext(LoginContext);

  return (
    <>
      <HomeTags />
      <DefaultLayout menuProps={menuProps}>
        <div className="container">
          {/* App Carausel */}
          <CarouselAuto />

          {/* content */}
          <Container elevation={0} background={"#17141d"}>
            <Typography
              color="primary"
              variant="h4"
              align="center"
              className={classes.headings}
            >
              {homepage.title}
              <strong>({homepage.title_2})</strong>
              <br />
            </Typography>
            <Typography
              color="secondary"
              variant="h4"
              align="center"
              className={classes.headings}
            >
              {homepage.title_3}
            </Typography>
          </Container>

          {/* Projects section */}
          <Container
            elevation={0}
            top={2}
            sides={"0px"}
            background={"rgba(255, 255, 255, 0)"}
          >
            <Grid container spacing={1}>
              {projects.map(project => {
                return (
                  <Grid item md={4} sm={6} xs={12}>
                    <ProjectCard project={project} />
                  </Grid>
                );
              })}
            </Grid>
            {/* Area of Specialisation */}
            <br />
            <Divider />
            <br />

            <Grid container justify="space-between">
              <Specialisation
                Subtitle={homepage.subtitle_1}
                Paragraph={homepage.paragraph_1}
                Img={"/assets/images/faay.jpg"}
                data={specialisation_data}
              />
            </Grid>

            <br />
            <Divider />
            <br />
            {/*Our Main Activities */}

            <Grid container container justify="space-between">
              <Activities
                Subtitle={homepage.subtitle_2}
                Paragraph={homepage.paragraph_2}
                data={activities_data}
                Img={"/assets/images/euteec.jpg"}
              />
            </Grid>

            <br />
            {/* App Links */}
            <Grid container justify="space-evenly">
              {app_links.map(link => {
                return (
                  <Grid item>
                    <LinkCard link={link} />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </div>
      </DefaultLayout>
    </>
  );
};

Index.getInitialProps = ({ store, isServer }) => {
  store.dispatch(increment(isServer));

  return { isServer };
};

const mapStateToProps = state => {
  return {
    counter: state
  };
};

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
