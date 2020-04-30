import { USER_INFO, MEMBER_INFO } from "../constants";

const initialState = {
  member: null,
  user: null
};

function user(state = initialState, action) {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        user: action.user
      };
    case MEMBER_INFO:
      return {
        ...state,
        member: action.member
      };

    default:
      return state;
  }
}
export default user;
