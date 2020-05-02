import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { DialogContent, Button, DialogActions } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { setisLoginDialogOpen } from "@/actions/redux-actions";
import useAuthentication from "@/state/useAuthentication";

const useAuthStyles = makeStyles(theme => ({
  dialog: {
    // background: "#17141d"
  },
  logo: {
    width: 100,
    height: 100,
    margin: "auto",
    marginBottom: 5,
    overflow: "hidden",
    background: "white",
    borderRadius: "50%",
    border: "solid 1px green"
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
    }
    completeDialogSignIn();
  }, [user]);

  return (
    <>
      <Dialog open={isLoginDialogOpen}>
        <DialogContent
          style={{ background: "#00c853", paddingLeft: 50, paddingRight: 50 }}
        >
          <br />
          <div className={classes.logo}>
            <img src="/assets/images/techlogo.png" width={"100%"} />
          </div>

          <Typography align="center" variant="h5">
            EUTEEC
          </Typography>
          <br />
          <div style={{ paddingLeft: 50, paddingRight: 50 }}>
            <h6 className={classes.credit}>Designed by Ricktechs</h6>
          </div>
          <br />
          <Typography align="center">How do you like to login?</Typography>
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
        <DialogActions style={{ background: "#1b5e20" }}>
          <Button
            size="/large"
            color="inherit"
            style={{ margin: "auto" }}
            onClick={() => dispatch(setisLoginDialogOpen(false))}
          >
            continue without login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
