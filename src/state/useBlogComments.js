import React from "react";
import { useAxios } from "./useFetch/useAxios";
import { useSelector } from "react-redux";
import { API_COMMENTS_GET, API_COMMENT_POST } from "@/api/comments";
const useBlogComments = ({ blogId }) => {
  const { user } = useSelector(state => state.user);

  const [userInput, setUserInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      body: "",
      date: new Date(),
      user: {
        id: user && user.uid,
        avator: user && user.photoURL,
        name: user && user.displayName
      },
      success: null,
      error: null
    }
  );

  /* perform comments get */
  const {
    getResponse: getComments,
    error,
    isLoading,
    response: comments
  } = useAxios("get", API_COMMENTS_GET(blogId && blogId));

  /* perform comments post/put */
  const {
    getResponse: postComment,
    error: commentPostError,
    isLoading: isCommentPostLoading,
    response: commentPostResponse
  } = useAxios("put", API_COMMENT_POST(blogId && blogId));

  /* post/put comments effect */

  React.useEffect(() => {
    if (blogId) {
      getComments();
    }
  }, [blogId]);

  React.useEffect(() => {
    if (commentPostResponse) {
      setUserInput({
        success: `comment has been submitted`
      });
      getComments();
    }
    if (commentPostError) {
      setUserInput({
        error: "Opps!! something went wrong"
      });
    }
  }, [commentPostResponse, commentPostError]);

  /* actions functions */
  const handleFormChange = e => {
    const { name, value } = e.target;
    setUserInput({ [name]: value });
  };

  const CheckRequiedFields = () => {
    if (userInput.body) {
      return true;
    }
    return false;
  };

  const handleCommentsSave = () => {
    var commentsFormData = new FormData();
    for (var key in userInput) {
      commentsFormData.append(key, userInput[key]);
    }

    CheckRequiedFields() ? postComment(userInput) : null;
  };

  return {
    handleCommentsSave,
    handleFormChange,
    isCommentPostLoading,
    comments,
    user
  };
};

export default useBlogComments;
