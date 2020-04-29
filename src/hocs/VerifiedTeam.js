import React from "react";
import useMembershipState from "@/state/useMembershipState";
import { Overlay } from "@/components";
import TeamContext from "@/context/TeamContext";
const VerifiedTeam = ({ children }) => {
  const data = useMembershipState({ action: "getAllUsers" });
  const shared = { verifiedMembers: data.verifiedMembers };

  return data.isGetUsersLoading ? (
    <Overlay overlayText="Loading Team..." isVisible={data.isGetUsersLoading} />
  ) : (
    data.verifiedMembers && (
      <TeamContext.Provider value={{ ...shared }}>
        {children}
      </TeamContext.Provider>
    )
  );
};
export default VerifiedTeam;
