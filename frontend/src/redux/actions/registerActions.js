import axios from "axios";
import {
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS
} from "../actionTypes/registerActionsTypes";

const register = (registerData) => async (dispatch) => {
  console.log("from login func");
  dispatch({ type: USER_REGISTER_REQUEST });
  try {
    const data = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/user/register`,
      method: "POST",
      data: registerData
    });

    console.log(data);
   return dispatch({ type: USER_REGISTER_SUCCESS, payload: data?.data });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: USER_REGISTER_FAILURE });
  }
};

export { register };
