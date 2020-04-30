import React, { useContext } from "react";

import Dialog from "@material-ui/core/Dialog";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { DialogContent, Button, DialogActions } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import { LoginContext } from "@/context/LoginContext/LoginContext";

const useAuthStyles = makeStyles(theme => ({
  dialog: {
    // background: "#17141d"
  },
  logo: {
    width: 100,
    margin: "auto",
    overflow: "hidden"
  },
  credit: {
    textAlign: "center"
  },

  logo_1: {
    width: "100%",
    transform: "scale(0.5, 0.5)"
  },

  logo_2: {
    width: "100%",
    transform: "scale(0.6, 0.6)"
  },
  centered: { height: "100vh" },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const StyledLoginIconButton = withStyles({
  root: {
    width: 90
  }
})(IconButton);

export const LoginDialog = () => {
  const classes = useAuthStyles();
  const {
    signInWithGoogle,
    signInWithfacebook,
    loginState,
    closeLoginDialog,
    completeDialogSignIn,
    user
  } = useContext(LoginContext);

  const autoOpen = loginState ? loginState.isLoginDialogOpen : false;
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    !user && completeDialogSignIn();
    user && setLoading(false);
  }, [user]);
  return (
    <>
      <Dialog open={autoOpen || open} className={classes.dialog}>
        <DialogContent>
          <br />
          <div className={classes.logo}>
            {loading ? (
              <span>
                <CircularProgress />
              </span>
            ) : (
              <img src="/static/assets/images/techlogo.png" width={"100%"} />
            )}
          </div>

          <Typography color="primary" align="center" variant="h4">
            Euteec
          </Typography>
          <br />
          <div style={{ paddingLeft: 50, paddingRight: 50 }}>
            <h6 className={classes.credit}>Designed by RickTechs</h6>
          </div>
          <br />
          <Typography align="center" color="textPrimary" variant="h6">
            How do you like to login?
          </Typography>
          <Grid container item xs={12} justify="space-evenly">
            <StyledLoginIconButton
              onClick={() => {
                signInWithGoogle() && setLoading(true);
              }}
            >
              <img
                src="/static/assets/images/google.png"
                className={classes.logo_1}
              />
            </StyledLoginIconButton>
            <StyledLoginIconButton
              onClick={() => {
                signInWithfacebook() && setLoading(true);
              }}
            >
              <img
                src="/static/assets/images/fb.png"
                className={classes.logo_2}
              />
            </StyledLoginIconButton>
          </Grid>
        </DialogContent>
        <DialogActions>
          {!autoOpen ? (
            <Button color="primary" size="small" onClick={() => setOpen(false)}>
              close
            </Button>
          ) : (
            <Button
              color="primary"
              size="small"
              onClick={() => closeLoginDialog()}
            >
              close
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};
