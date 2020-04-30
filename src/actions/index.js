import { INCREMENT, DECREMENT, MEMBER_INFO, USER_INFO } from "../constants";

export function userInfo(user) {
  return {
    type: USER_INFO,
    user
  };
}

export function memberInfo(member) {
  return {
    type: MEMBER_INFO,
    member
  };
}

export const increment = isServer => {
  return dispatch => {
    dispatch({
      type: INCREMENT,
      from: isServer ? "server" : "client"
    });
  };
};

export const decrement = isServer => {
  return dispatch => {
    dispatch({
      type: DECREMENT,
      from: isServer ? "server" : "client"
    });
  };
};
