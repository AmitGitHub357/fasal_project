import axios from "axios";
import swal from 'sweetalert';
import {
  MOVIES_GET_FAIL, MOVIES_GET_REQUEST, MOVIES_GET_SUCCESS,
  MOVIES_ADD_FAIL, MOVIES_ADD_REQUEST, MOVIES_ADD_SUCCESS,
  MOVIES_GET_ID_REQUEST, MOVIES_GET_ID_SUCCESS, MOVIES_GET_ID_FAIL,
  MOVIES_GET_TITLE_REQUEST, MOVIES_GET_TITLE_SUCCESS, MOVIES_GET_TITLE_FAIL, MOVIES_EMAIL_REQUEST
  ,MOVIES_EMAIL_SUCCESS,MOVIES_EMAIL_FAIL
} from "./moviesTypes"

export const addMovies = (moviesData) => async (dispatch, getState) => {
  dispatch({
    type: MOVIES_ADD_REQUEST,
  });

  try {
    const {
      userSignIn: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        auth: userInfo.token,
      },
    };
    const { data } = await axios.post(
      `http://localhost:5000/api/movies/`,
      moviesData,
      config
    );

    dispatch({
      type: MOVIES_ADD_SUCCESS,
      payload: data,
    });
    swal({
      title: "Success",
      text: "Added Successfully!",
      icon: "success",
    });
  } catch (error) {
    dispatch({
      type: MOVIES_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const sendEmail = (email) => async(dispatch, getState) => {
  dispatch({
    type : MOVIES_EMAIL_REQUEST
  })

  try{
    const config = {
      headers: {
        "Content-Type": "application/json",
        // auth: `${userInfo.token}`,
      },
    };
    const { data } = await axios.post("http://localhost:5000/api/movies/sendEmail",email, config)
    dispatch({
      type: MOVIES_EMAIL_SUCCESS,
      payload: data,
    });
    swal({
      title: "Successfull ",
      text: `Email sent ${email.email} We will rich you soon!`,
      icon: "success",
    });
  }catch(error){
    dispatch({
      type: MOVIES_EMAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
} 

export const getMovies = () => async (dispatch, getState) => {
  dispatch({
    type: MOVIES_GET_REQUEST,
  });

  try {
    const {
      userSignIn: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        // auth: `${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      "http://localhost:5000/api/movies",
      config
    );
    // console.log(data);
    dispatch({
      type: MOVIES_GET_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: MOVIES_GET_FAIL,
      payload: err.message,
    });
  }
};

export const getMovieListById = (id) => async (dispatch, getState) => {
  dispatch({
    type: MOVIES_GET_ID_REQUEST,
  });
  try {
    const {
      userSignIn: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        // auth: `${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `http://localhost:5000/api/movies/${id}`,
      config
    );
      console.log(data)
    dispatch({
      type: MOVIES_GET_ID_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: MOVIES_GET_ID_FAIL,
      payload: err.message,
    });
  }
};

export const getMovieListBySearch = (title) => async (dispatch, getState) => {
  dispatch({
    type: MOVIES_GET_TITLE_REQUEST,
  });
  try {
    const {
      userSignIn: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        // auth: `${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      // `https://www.omdbapi.com/?t=${title}&apikey=13840bea`,
      `http://localhost:5000/api/movies?movieName=Amit`,
      config
    );
    console.log(data) 
    dispatch({
      type: MOVIES_GET_TITLE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: MOVIES_GET_TITLE_FAIL,
      payload: err.message,
    });
  }
};
