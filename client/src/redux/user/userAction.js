import axios from "axios";
import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_SIGN_IN_REQUEST,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_IN_FAIL,
  USER_SIGN_UP_FAIL,
  USER_SIGN_UP_REQUEST,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_OUT_REQUEST,
} from "./userConstant";
export const fetchUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    const {
      userSignIn: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        auth: `${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`http://localhost:5000/api/user/`, config);
    console.log(data);
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userRegister =
  (name, dob, email, password) => async (dispatch) => {
    dispatch({
      type: USER_SIGN_UP_REQUEST,
    });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `http://localhost:5000/api/user/signUp`,
        {
          name: name,
          email: email,
          dob: dob,
          password: password,
        },
        config
      );

      dispatch({
        type: USER_SIGN_UP_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_SIGN_UP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const Logout = () => (dispatch, getState) => {

  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_SIGN_OUT_REQUEST,
    payload: []});

};

export const userLogin = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_SIGN_IN_REQUEST,
    });
    const {
      userSignIn: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        // auth : `${userInfo.token}`
      },
    };

    const { data } = await axios.post(
      `http://localhost:5000/api/user/signIn`,
      { email: email, password: password },
      config
    );
    dispatch({
      type: USER_SIGN_IN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGN_IN_FAIL,
      payload:
        // error.response && error.response.data.message
        //   ? error.response.data.message
        error.message,
    });
  }
};
