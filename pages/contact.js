import React, { useContext } from "react";
import { Avatar, Grid, Typography, Paper } from "@material-ui/core/";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles } from "@material-ui/core/styles";
import useContactState from "@/state/useContactState";
import { Header, Overlay, FeedBack, Container } from "@/components";

/* page components */
import { ContactForm } from "@/components/Form/Contact";
import { LoginContext } from "@/context/LoginContext/LoginContext";
import DefaultLayout from "@/components/layouts/DefaultLayout/DefaultLayout";

const useStyles = makeStyles(theme => ({
  root: {
    // margin: theme.spacing(0, 2)
  },

  avatar: {
    margin: "auto",

    align: "center",
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    height: 540,

    padding: theme.spacing(5, 2),
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)"
  },
  img: {
    width: "100%",
    height: 540,
    borderRadius: 5,
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    [theme.breakpoints.down("sm")]: {
      height: "100%"
    }
  }
}));

export default function ContactPage() {
  const classes = useStyles();
  const contactProps = useContactState();
  const menuProps = useContext(LoginContext);

  return (
    <DefaultLayout menuProps={menuProps}>
      <div>
        <Header
          title={"Talk To Us"}
          subTitle={"we always answer you questions and welcome new ideas"}
          // Current={staticAbout.Current}
          image={"/assets/images/tech1.jpg"}
        />
        <Container background={"#17141d"}>
          {!(contactProps.userInput.success || contactProps.userInput.error) ? (
            <>
              <Grid
                container
                className={classes.root}
                justify="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item sm={12} md={6} xs={12}>
                  <img src="/assets/images/guys.jpg" className={classes.img} />
                </Grid>
                <Grid item sm={12} md={6} xs={12}>
                  <Paper className={classes.form}>
                    <Avatar className={classes.avatar}>
                      <EmailIcon />
                    </Avatar>
                    <Typography
                      gutterBottom
                      align="center"
                      component="h1"
                      variant="h6"
                    >
                      Send Us A Message
                    </Typography>
                    <ContactForm {...contactProps} />
                  </Paper>
                </Grid>
              </Grid>

              <Overlay
                overlayText="sending message..."
                isVisible={contactProps.isSendMessageLoading}
              />
            </>
          ) : (
            <FeedBack {...contactProps} />
          )}
        </Container>
      </div>
    </DefaultLayout>
  );
}
