import React from "react";
import { useAxios } from "./useFetch/useAxios";
import { useSelector } from "react-redux";
import {
  API_ADD_MEMBER,
  API_UPDATE_MEMBER,
  API_MEMBER_GET_ONE,
  API_MEMBERS_GET_ALL,
  API_EMAIL_CREATE
} from "../api";
import { useRouter } from "next/router";

const useMembershipState = ({ action }) => {
  const { user } = useSelector(state => state.user);
  const router = useRouter();
  const [userInput, setUserInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: user && user.displayName,
      userAvator: user && user.photoURL,
      userId: user && user.uid,
      file: [],
      email: user && user.email,
      phoneNumber: "",
      baseEmail: user && user.email,
      membershipCategory: "MEMBERS AND LEARNERS",
      bio: "",
      profession: "",

      hobbies: "",
      profession: "instrumentation and control engineer",
      quote: "",
      location: "",
      followers: "",
      following: "",
      isVerified: false,
      success: null,
      error: null,
      message: null,
      profileCompletess: 60
    }
  );

  /* check if action is join or update  */
  const query = (action => {
    switch (action) {
      case "join":
        return { url: API_ADD_MEMBER, method: "post" };
      case "update":
        return { url: API_UPDATE_MEMBER(user && user.uid), method: "put" };
      default:
        return { url: "", method: "" };
    }
  })(action);

  /* get all members */

  const {
    response: members,
    getResponse: getAllMembers,
    error: usersGetError,
    isLoading: isGetUsersLoading
  } = useAxios("get", API_MEMBERS_GET_ALL);

  /* filter verified members */
  const verifiedMembers =
    members &&
    members.filter(i => {
      return i.isVerified === true;
    });

  React.useEffect(() => {
    if (action === "getAllUsers") {
      getAllMembers();
    }
  }, []);

  /* if action="update" get current member  */
  const {
    response: member,
    getResponse: getMember,
    error: userGetError,
    isLoading: isGetUserLoading
  } = useAxios("get", API_MEMBER_GET_ONE(user && user.uid));

  React.useEffect(() => {
    getMember();
    // action === "update" ? getMember() : null;
  }, [action]);

  /* check if member obj has value then spread to user input state */
  React.useEffect(() => {
    if (member && member.length >= 1) {
      member[0].isVerified
        ? setUserInput({
            message:
              "user under this account has already been registered as a member"
          })
        : setUserInput({
            message: "User registration approval pending"
          });

      setUserInput({ ...member[0] });
    }
    if (userGetError) {
      setUserInput({
        message: "Check your internet connection and try again"
      });
    }
  }, [member, userGetError]);

  /* post/put action */
  const {
    response: userPostResponse,
    isLoading: isUserPostLoading,
    error: UserPostError,
    getResponse: postMember
  } = useAxios(query.method, query.url);

  /* send email to admin notifying new user registration  */
  const emailDetails = {
    name: userInput.name,
    email: userInput.email,
    message: `
    <div><img src=${userInput.userAvator} height="42" width="42"/></div>
    ${userInput.name} requests to join ${userInput.membershipCategory} group in the club
    please use this link to activate requested membership <a href="euteec.netlify.app/users/pending/${userInput.userId}">activate member</a>
    `
  };

  const {
    uploadingPercentage,
    response: emailResponse,
    isLoading: isPostEmailLoading,
    error: EmailPostError,
    getResponse: postEmail
  } = useAxios("post", API_EMAIL_CREATE, emailDetails);

  /* check if user has registerd then send an email to admin */
  React.useEffect(() => {
    if (userPostResponse) {
      action === "update" &&
        setUserInput({
          success: "user profile updated successfully"
        });
      action === "join" && postEmail();
    }
  }, [userPostResponse]);

  /* set success if user has been registerd */
  React.useEffect(() => {
    if (emailResponse) {
      setUserInput({
        success: `User has been ${
          action === "update"
            ? "updated successfully"
            : "registered successfully.please wait for admin approval "
        }  `
      });
    }

    if (UserPostError) {
      setUserInput({
        error: "Opps!! something went wrong"
      });
    }
    if (EmailPostError) {
      setUserInput({
        error:
          "Opps!! could not complete registration process please send us a message so that we can activate you membership "
      });
    }
  }, [emailResponse, EmailPostError, UserPostError]);

  const handleFormChange = e => {
    const { name, value } = e.target;

    setUserInput({ [name]: value });
    /* check form completeness */
    // userInput.bio &&
    //   setUserInput({ profileCompletess: userInput.profileCompletess + 40 });
    // userInput.name &&
    //   setUserInput({ profileCompletess: userInput.profileCompletess + 10 });
    // userInput.bio &&
    //   setUserInput({ profileCompletess: userInput.profileCompletess + 10 });
  };

  const handleUserAvatorChange = e => {
    setUserInput({
      userAvator: URL.createObjectURL(e.target.files[0])
    });
    setUserInput({
      file: e.target.files[0]
    });
  };
  const handleResetProfilePic = () => {
    setUserInput({
      userAvator: null
    });
  };
  const CheckRequiedFields = () => {
    if (userInput.name && userInput.phoneNumber && userInput.bio) {
      return true;
    }
    return false;
  };

  const handleSave = () => {
    var memberFormData = new FormData();
    for (var key in userInput) {
      memberFormData.append(key, userInput[key]);
    }
    CheckRequiedFields() ? postMember(memberFormData) : null;
  };
  const handleRetry = () => {
    setUserInput({
      error: null
    });
    setUserInput({
      success: null
    });
  };
  const viewMembershipStatus = () => {
    if (action === "update") {
      router.push(`/profile/${user && user.uid}`);
    } else {
      location.reload();
    }
  };

  const handleGoBack = () => {
    router.back();
  };
  return {
    handleFormChange,
    handleResetProfilePic,
    handleSave,
    handleRetry,
    userInput,
    isUserPostLoading,
    isGetUserLoading,
    UserPostError,
    emailResponse,
    userGetError,
    isPostEmailLoading,
    EmailPostError,
    handleUserAvatorChange,
    getMember,
    members,
    verifiedMembers,
    usersGetError,
    isGetUsersLoading,
    uploadingPercentage,
    viewMembershipStatus,
    handleGoBack
  };
};

export default useMembershipState;
