import React from "react";
import { Drawer, Typography, Divider } from "@material-ui/core/";
import Lists from "@/components/Navigation/Lists";
import UserAvator from "../User/Avator";
import { Grid, Hidden } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

export default function AppDrawer({
  mobileOpen,
  handleDrawerToggle,
  container,
  drawerWidth
}) {
  const useDrawerStyles = makeStyles(theme => ({
    drawerPaper: {
      width: drawerWidth
      // backgroundColor: theme.palette.background.default
    },
    drawerHeader: {
      display: "flex",
      padding: 20,
      marginBottom: 10
      // backgroundColor: theme.palette.primary.main
    }
  }));
  const theme = useTheme();
  const classes = useDrawerStyles();
  // const { user } = useSelector(state => state.user);
  const user = "";
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Drawer
        container={container}
        variant="temporary"
        anchor={theme.direction === "rtl" ? "right" : "left"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper
        }}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
      >
        <Grid container direction="column" className={classes.drawerHeader}>
          {/* user Avator */}
          <UserAvator />
          {/* user Details */}
          <Typography gutterBottom color="inherit" variant="h6">
            {user && user.displayName}
          </Typography>
          <Typography color="inherit" variant="inherit">
            {user && user.email}
          </Typography>
        </Grid>
        {/* Drawer List */}
        <Lists />
      </Drawer>
    </nav>
  );
}
