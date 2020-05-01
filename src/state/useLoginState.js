import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import useAuthState from "./useAuthState";

const useLoginState = () => {
  const { user } = useSelector(state => state.user);

  const {
    signOut,
    signInWithGoogle,
    signInWithfacebook,
    completeDialogSignIn
  } = useAuthState();
  const router = useRouter();
  const [loginState, setloginState] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      isLoginDialogOpen: false
    }
  );

  React.useEffect(() => {
    setloginState({
      isLoginDialogOpen: false
    });
  }, [user]);

  const closeLoginDialog = () => {
    setloginState({
      isLoginDialogOpen: false
    });
  };
  const handleLogOut = () => {
    signOut();
    // router.push("/signin");
  };
  const handleLogIn = () => {
    !user &&
      setloginState({
        isLoginDialogOpen: true
      });
  };

  const handleViewProfile = () => {
    user && router.push("/profile/[userId]", `/profile/${user.uid}`);
  };
  return {
    closeLoginDialog,
    handleLogIn,
    handleLogOut,
    handleViewProfile,
    loginState,
    signInWithGoogle,
    signInWithfacebook,
    completeDialogSignIn,
    user
  };
};

export default useLoginState;
