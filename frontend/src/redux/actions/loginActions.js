import axios from "axios";
const {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE
} = require("../actionTypes/loginActionsTypes");

const login = (loginData) => async (dispatch) => {
  console.log("from login func");
  dispatch({ type: USER_LOGIN_REQUEST });
  try {
    const data = await axios({
      url: `${process.env.REACT_APP_BASE_URL}/user/login`,
      method: "POST",
      data: loginData
    });

    console.log(data);
    localStorage.setItem("user_token", data?.data?.token);
    return dispatch({ type: USER_LOGIN_SUCCESS, payload: data?.data });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: USER_LOGIN_FAILURE });
  }
};

export { login };
