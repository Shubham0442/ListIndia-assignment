import {
  SEARCH_BUSINESS_FAILURE,
  SEARCH_BUSINESS_REQUEST,
  SEARCH_BUSINESS_SUCCESS
} from "../actionTypes/businessActionTypes";

const initState = {
  isLoading: false,
  isError: false,
  searchResult: []
};

export const businessSearchReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SEARCH_BUSINESS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case SEARCH_BUSINESS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchResult: payload?.response
      };
    case SEARCH_BUSINESS_FAILURE:
      return {
        ...state,
        isLoading: false,
        searchResult: [],
        isError: true
      };
    default:
      return state;
  }
};
