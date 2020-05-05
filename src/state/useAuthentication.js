import { useDispatch } from "react-redux";
import { providers, firebaseAppAuth } from "../firebase/index";
import { userInfo, memberInfo } from "../actions/redux-actions";

const useAuthentication = () => {
  const googleProvider = providers.googleProvider;
  const facebookProvider = providers.facebookProvider;

  const dispatch = useDispatch();
  const signIn = provider => {
    dispatch({ type: "IS_USER_LOADING", isUserLoading: true });
    firebaseAppAuth
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // store user to redux store

        if (user) {
          dispatch(userInfo(user));
          dispatch({ type: "IS_USER_LOADING", isUserLoading: false });
          dispatch({ type: "IS_LOGIN_DIALOG_OPEN", isLoginDialogOpen: false });
          dispatch({ type: "ERROR", error: false });
        }
      })
      .catch(function (error) {
        dispatch({ type: "IS_USER_LOADING", isUserLoading: false });

        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        dispatch({
          type: "ERROR",
          error: "please check your internet connection and try again"
        });
        // ...
      });
  };

  const signOut = () => {
    firebaseAppAuth
      .signOut()
      .then(function () {
        dispatch(userInfo(null));
        // dispatch(blogPosts([]));
      })
      .catch(function (error) {
        // an error happened
      });
  };

  const signInWithGoogle = () => {
    signIn(googleProvider);
  };

  const signInWithfacebook = () => {
    signIn(facebookProvider);
  };

  return {
    signInWithGoogle,
    signOut,
    signInWithfacebook
  };
};
export default useAuthentication;
