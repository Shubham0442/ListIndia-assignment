import axios from "axios";
import {
  ADD_NEW_BUSINESS_FAILURE,
  ADD_NEW_BUSINESS_REQUEST,
  ADD_NEW_BUSINESS_SUCCESS,
  GET_ALL_BUSINESSES_FAILURE,
  GET_ALL_BUSINESSES_REQUEST,
  GET_ALL_BUSINESSES_SUCCESS
} from "../actionTypes/businessActionTypes";

const addNewBusiness = (business) => async (dispatch) => {
  dispatch({ type: ADD_NEW_BUSINESS_REQUEST });
  console.log("business", business);
  try {
    const data = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/business/new`,
      method: "POST",
      data: business,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("user_token")}`
      }
    });
    return dispatch({ type: ADD_NEW_BUSINESS_SUCCESS, payload: data?.data });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: ADD_NEW_BUSINESS_FAILURE });
  }
};

const getAllBusinesses =
  (searchTerm = "") =>
  async (dispatch) => {
    dispatch({ type: GET_ALL_BUSINESSES_REQUEST });
    try {
      const data = await axios({
        url: `${process.env.REACT_APP_BASE_URL}/business/get?search=${searchTerm}`,
        method: "GET",
        data: { userId: "" },
        headers: {
          "Content-Type": "application/json"
        }
      });

      dispatch({ type: GET_ALL_BUSINESSES_SUCCESS, payload: data?.response });
    } catch (error) {
      console.log("error", error);
      dispatch({ type: GET_ALL_BUSINESSES_FAILURE });
    }
  };

export { addNewBusiness, getAllBusinesses };
