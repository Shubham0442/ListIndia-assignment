import {
  GET_ALL_BUSINESSES_FAILURE,
  GET_ALL_BUSINESSES_REQUEST,
  GET_ALL_BUSINESSES_SUCCESS
} from "../actionTypes/businessActionTypes";

const initState = {
  isLoading: false,
  isError: false,
  allBusinesses: []
};

export const businessReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ALL_BUSINESSES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_ALL_BUSINESSES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allBusinesses: payload?.allBusinesses
      };
    case GET_ALL_BUSINESSES_FAILURE:
      return {
        ...state,
        isLoading: false,
        allBusinesses: [],
        isError: true
      };
    default:
      return state;
  }
};
