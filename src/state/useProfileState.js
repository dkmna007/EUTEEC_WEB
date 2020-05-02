import React from "react";
import { API_MEMBER_GET_ONE } from "../api";

import { useSelector } from "react-redux";
import { useAxios } from "./useFetch/useAxios";
import { useRouter } from "next/router";

const useProfileState = ({ action, isAuthorMember, userId }) => {
  const { user } = useSelector(state => state.user);

  const router = useRouter();
  const [userInput, setUserInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: user ? user.displayName : "Not Registered",
      email: user ? user.email : "Not Registered",
      userAvator: user ? user.photoURL : "Not Registered",
      profession: "Not Registered",
      bio:
        "please register for club membership so that people can reach you easily"
    }
  );
  /* get one member */
  const {
    getResponse: getMember,
    error: memberGetError,
    isLoading: isLoadingMember,
    response: member
  } = useAxios("get", API_MEMBER_GET_ONE(userId ? userId : action));

  React.useEffect(() => {
    if (userId || action) {
      getMember();
    }
  }, [userId, action]);

  React.useEffect(() => {
    if (member && member.length >= 1) {
      setUserInput({ ...member[0] });
    }
    if (member && member.length < 1 && !isAuthorMember) {
      // router.push("/errors/"); handle join membership
    }
  }, [member]);

  return {
    isLoadingMember,
    userInput
  };
};

export default useProfileState;
