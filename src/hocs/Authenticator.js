import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const RequireAuth = ({ children }) => {
  const { user } = useSelector(state => state.user);
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    // checkAndRedirectUser();

    redirectToHomePage();
  }, [user]);

  const redirectToHomePage = () => {
    user && location.pathname === "/signin" && history.push("/");
  };

  // const checkAndRedirectUser = () => {
  //   !user
  //     ? history.push("/signin")
  //     : user && location.pathname === "/signin"
  //     ? history.push("/")
  //     : null;
  // };
  // if (!user) {
  //   return null;

  // }

  return children;
};

// ...AppRouter
