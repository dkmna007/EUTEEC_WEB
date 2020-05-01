import { useDispatch } from "react-redux";
import { providers, firebaseAppAuth } from "../firebase/index";
import { userInfo } from "../actions/";

const useAuthState = () => {
  const googleProvider = providers.googleProvider;
  const facebookProvider = providers.facebookProvider;

  const dispatch = useDispatch();
  const signIn = provider => {
    firebaseAppAuth.signInWithRedirect(provider);

    firebaseAppAuth
      .getRedirectResult()
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // store user to redux store
        user && dispatch(userInfo(user));
        console.log(user);
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  const completeDialogSignIn = () => {
    firebaseAppAuth
      .getRedirectResult()
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // store user to redux store
        user && dispatch(userInfo(user));
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
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
    signInWithfacebook,
    completeDialogSignIn
  };
};
export default useAuthState;
