import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from "../actionTypes/loginActionsTypes";

const initState = {
  isLoading: false,
  isError: false,
  user: {}
};

export const loginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload?.user
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        user: {},
        isError: true
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLoading: false,
        isErro: false,
        user: {}
      };
    default:
      return state;
  }
};
