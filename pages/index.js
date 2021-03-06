import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography, Divider } from "@material-ui/core";

/* page components */
import { LinkCard, ProjectCard, Container, CarouselAuto } from "@/components";
import { ListCard as Specialization } from "@/components/Cards/ListCard";
import { ListCard as Activities } from "@/components/Cards/ListCard";

/* constants */
import { Constants } from "@/constants/Home";
import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";
import { HomeTags } from "@/components/HeadTags/HomeTags";

const useStyles = makeStyles((theme) => ({
  headings: {
    margin: theme.spacing(3, 0),
    color: "#43a047",
  },
}));

const Index = (props) => {
  const classes = useStyles();
  const {
    homepage,
    Specialization_data,
    activities_data,
    app_links,
    projects,
  } = Constants();

  return (
    <>
      <HomeTags />
      <DefaultLayout>
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
              {projects.map((project) => {
                return (
                  <Grid item md={4} sm={6} xs={12}>
                    <ProjectCard project={project} />
                  </Grid>
                );
              })}
            </Grid>

            {/* Area of Specialization */}

            <Container
              elevation={0}
              top={2}
              sides={"0px"}
              background={"rgba(255, 255, 255, 0)"}
            >
              <br />
              <Divider />
              <br />

              <Grid container justify="space-between">
                <Specialization
                  Subtitle={homepage.subtitle_1}
                  Paragraph={homepage.paragraph_1}
                  Img={"/assets/images/faay.jpg"}
                  data={Specialization_data}
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
            </Container>

            <br />
            {/* App Links */}
            <Grid container justify="space-evenly">
              {app_links.map((link) => {
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

export default Index;
