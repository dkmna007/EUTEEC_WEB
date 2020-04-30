import React from "react";

import { LoginContext } from "./LoginContext";
import useLoginState from "@/state/useLoginState";

export default function LoginContextProvider({ children }) {
  const state = useLoginState();
  return (
    <LoginContext.Provider value={state}>{children}</LoginContext.Provider>
  );
}
