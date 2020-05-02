import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import useAuthentication from "./useAuthentication";
import { useAxios } from "./useFetch/useAxios";
import { API_MEMBER_GET_ONE } from "@/api";

const useAuthorization = () => {
  const { user } = useSelector(state => state.user);

  /* check if user is member */
  const {
    response: member,
    getResponse: getMember,
    error: userGetError
    // isLoading: isGetUserLoading
  } = useAxios("get", API_MEMBER_GET_ONE(user && user.uid));

  React.useEffect(() => {
    if (!member && !userGetError) {
      getMember();
    }
  });

  const {
    signOut,
    signInWithGoogle,
    signInWithfacebook,
    completeDialogSignIn
  } = useAuthentication();

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
    handleViewProfile,
    loginState
  };
};

export default useAuthorization;
