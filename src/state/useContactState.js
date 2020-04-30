import React from "react";
import { API_EMAIL_CREATE } from "../api";
import { useAxios } from "./useFetch/useAxios";
import { useSelector } from "react-redux";
import { isEmailvalid } from "@/utils";
const useContactState = () => {
  const { user } = useSelector(state => state.user);

  const [userInput, setUserInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: user && user.displayName,
      email: user && user.email,
      message: null,
      error: null,
      success: null
    }
  );

  /* perform blog post/put */
  const {
    getResponse: sendMessage,
    error: messagePostError,
    isLoading: isSendMessageLoading,
    response: sendMessageResponse
  } = useAxios("post", API_EMAIL_CREATE, userInput);

  React.useEffect(() => {
    if (sendMessageResponse) {
      setUserInput({
        success: `Your message has been sent successfully.One of our officials will get back to you once they recieve your message  `
      });
    }
    if (messagePostError) {
      setUserInput({
        error: "Opps!! something went wrong"
      });
    }
  }, [sendMessageResponse, messagePostError]);

  const handleFormChange = e => {
    const { name, value } = e.target;
    setUserInput({ [name]: value });
  };

  const CheckRequiedFields = () => {
    if (userInput.message && isEmailvalid(userInput.email)) {
      return true;
    }
    return false;
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
  const handleSendMessage = () => {
    CheckRequiedFields() ? sendMessage() : null;
  };
  return {
    handleSendMessage,
    handleGoBack,
    handleRetry,
    handleFormChange,
    userInput,
    isSendMessageLoading
  };
};

export default useContactState;
