import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setisLoginDialogOpen } from "@/actions/redux-actions";

const useProfileState = ({ action, userId, error, member }) => {
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: user && user.displayName,
      email: user && user.email,
      userAvator: user && user.photoURL,
      profession: "Not available",
      bio: "Not available",
      error: null
    }
  );

  React.useEffect(() => {
    if (member) {
      setUserInput({ ...member });
    }
    if (!member) {
      // router.push("/errors/"); handle join membership
    }
  }, [member]);

  /**
   *
   * check if user can  edit profile
   *
   *
   */
  const canEditProfile = user && user.uid === userInput.userId;

  /**
   *
   * display profile if user exists
   *
   *
   */
  const isProfileVisible = true;

  /**
   *
   * open login dialog if user wants to edit profile and has not login
   *
   */
  const handleOpenloginDialog = () => dispatch(setisLoginDialogOpen());

  return {
    userInput,
    isProfileVisible,
    canEditProfile,
    handleOpenloginDialog
  };
};

export default useProfileState;
