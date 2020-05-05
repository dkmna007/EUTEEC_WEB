import React, { useContext } from "react";
import UserAvatar from "../User/Avator";
// import { AccountCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Popper,
  MenuItem,
  MenuList,
  ClickAwayListener,
  IconButton,
  Grow
} from "@material-ui/core";
import useAuthentication from "@/state/useAuthentication";
import { setisLoginDialogOpen } from "@/actions/redux-actions";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paper: {
    margin: theme.spacing(0)
  }
}));

export default function LogoutMenu(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const { signOut } = useAuthentication();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <IconButton
          color="inherit"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <UserAvatar size="small" />
        </IconButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    {user ? (
                      <>
                        <Link
                          href="/profile/[userId]"
                          as={`/profile/${user.uid}`}
                        >
                          <MenuItem>Profile</MenuItem>
                        </Link>

                        <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                      </>
                    ) : (
                      <MenuItem
                        onClick={() => dispatch(setisLoginDialogOpen(true))}
                      >
                        Login
                      </MenuItem>
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
