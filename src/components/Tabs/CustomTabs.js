import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Button } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  tabRootButton: {
    // background: "#17141d",
    borderRadius: "3px",
    lineHeight: "24px",
    borderRadius: "30px",
    marginLeft: "4px",
    fontWeight: "500",
    fontSize: "15px"
    // boxShadow:
    //   "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)"
  }
}));

export default function CustomTabs(props) {
  const classes = useStyles();
  const { tabs, activeTab, handleTabClick } = props;

  return (
    <>
      {tabs.map((prop, key) => {
        return (
          <Grid item key={prop.tabName}>
            <Button
              color={activeTab === prop.tabName ? "secondary" : "inherit"}
              variant={activeTab === prop.tabName ? "contained" : "text"}
              className={classes.tabRootButton}
              onClick={handleTabClick(prop.tabName)}
            >
              {prop.tabName}
            </Button>
          </Grid>
        );
      })}
    </>
  );
}
