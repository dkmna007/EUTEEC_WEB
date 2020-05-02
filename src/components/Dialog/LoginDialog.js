import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { DialogContent, Button, DialogActions } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { setisLoginDialogOpen } from "@/actions";
import useAuthentication from "@/state/useAuthentication";

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
    completeDialogSignIn
  } = useAuthentication();

  const { isLoginDialogOpen, user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (user) {
      dispatch(setisLoginDialogOpen(false));
    } else {
      dispatch(setisLoginDialogOpen(true));
    }
  }, [user]);

  return (
    <>
      <Dialog open={isLoginDialogOpen}>
        <DialogContent>
          <br />
          <div className={classes.logo}>
            <img src="/assets/images/techlogo.png" width={"100%"} />
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
                signInWithGoogle();
              }}
            >
              <img src="/assets/images/google.png" className={classes.logo_1} />
            </StyledLoginIconButton>
            <StyledLoginIconButton
              onClick={() => {
                signInWithfacebook();
              }}
            >
              <img src="/assets/images/fb.png" className={classes.logo_2} />
            </StyledLoginIconButton>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            size="small"
            onClick={() => dispatch(setisLoginDialogOpen(false))}
          >
            close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
