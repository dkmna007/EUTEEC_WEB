import { USER_INFO, MEMBER_INFO, IS_LOGIN_DIALOG_OPEN } from "../constants";

const initialState = {
  member: null,
  user: null,
  isLoginDialogOpen: true
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

    case IS_LOGIN_DIALOG_OPEN:
      return {
        ...state,
        isLoginDialogOpen: action.isLoginDialogOpen
      };

    default:
      return state;
  }
}
export default user;
