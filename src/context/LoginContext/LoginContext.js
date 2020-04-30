import React from "react";

export const LoginContext = React.createContext({
  closeLoginDialog: undefined,
  handleLogIn: undefined,
  handleLogOut: undefined,
  handleViewProfile: undefined,
  loginState: undefined,
  signInWithGoogle: undefined,
  signInWithfacebook: undefined,
  user: undefined,
  completeDialogSignIn: undefined
});
