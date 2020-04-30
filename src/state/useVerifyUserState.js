import React from "react";
import { API_UPDATE_MEMBER } from "../api";
import { useAxios } from "./useFetch/useAxios";
// import { useSelector } from "react-redux";

const useVerifyUserState = userId => {
  //   const { user } = useSelector(state => state.user);
  const [userInput, setUserInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      success: null,
      error: null
    }
  );
  const user = {
    isVerified: true
  };

  const {
    getResponse: getUserResponse,
    error: UserVerificationError,
    isLoading: isUserLoading,
    response: userResponse
  } = useAxios("put", API_UPDATE_MEMBER(userId), user);

  React.useEffect(() => {
    if (userResponse) {
      setUserInput({
        success:
          "user has been activated successfully and now appears on members section of the website"
      });
    }
    if (UserVerificationError) {
      setUserInput({ error: "Opps somthing went wrong" });
    }
  }, [userResponse, UserVerificationError]);
  const handleVerifyUser = () => {
    getUserResponse();
  };

  const handleRetry = () => {
    setUserInput({
      error: null
    });
    setUserInput({
      success: null
    });
  };

  const handleGoBack = () => {
    setUserInput({
      error: null
    });
    setUserInput({
      success: null
    });
  };
  return {
    handleVerifyUser,
    userInput,
    isUserLoading,
    handleRetry,
    handleGoBack
  };
};

export default useVerifyUserState;
