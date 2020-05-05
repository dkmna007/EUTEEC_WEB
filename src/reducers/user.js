import {
  USER_INFO,
  MEMBER_INFO,
  IS_LOGIN_DIALOG_OPEN,
  IS_USER_LOADING,
  ERROR
} from "../constants";

const initialState = {
  member: null,
  user: null,
  error: false,
  isUserLoading: false,
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
    case IS_USER_LOADING:
      return {
        ...state,
        isUserLoading: action.isUserLoading
      };
    case ERROR:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}
export default user;
