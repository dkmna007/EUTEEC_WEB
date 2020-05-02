import React from "react";
import PropTypes from "prop-types";
import AppBar from "./AppBar/";
import { makeStyles } from "@material-ui/core/styles";
import AppFooter from "./AppFooter";
import AppDrawer from "./AppDrawer/";
import Router from "next/router";
import Spinner from "@/components/Progress/Spinner";
import { Overlay } from "@/components/Overlay";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    // display: "flex"
  },

  toolbar: theme.mixins.toolbar,

  content: {
    margin: theme.spacing(-10, 0)
  },
  footer: {
    // padding: theme.spacing(1)
  }
}));

function DefaultLayout(props) {
  const { children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [loading, setloading] = React.useState(false);
  React.useEffect(() => {
    Router.onRouteChangeStart = () => {
      setloading(true);
    };
    Router.onRouteChangeComplete = () => {
      setloading(false);
    };
    Router.onRouteChangeError = () => {
      setloading(false);
    };
  }, []);

  const classes = useStyles();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScrollUpClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <div id="back-to-top-anchor"></div>
      <div className={classes.root}>
        {/* AppBar */}
        <AppBar
          handleDrawerToggle={handleDrawerToggle}
          color="transparent"
          brand="EUTEEC"
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "primary"
          }}
        />

        {/* App drawer */}
        <AppDrawer
          handleDrawerToggle={handleDrawerToggle}
          // container={container}
          mobileOpen={mobileOpen}
          drawerWidth={drawerWidth}
        />

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Overlay overlayText="loading" isVisible={loading} />
          {children}
        </main>
      </div>

      <div className={classes.footer}>
        <AppFooter handleClick={handleScrollUpClick} />
      </div>
    </>
  );
}

DefaultLayout.propTypes = {
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  )
};

export default DefaultLayout;
