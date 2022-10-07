import axios from "axios";
import {
  PROJECT_LIST_FAIL,
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_ADD_FAIL,
  PROJECT_ADD_SUCCESS,
  PROJECT_ADD_REQUEST,
  PROJECT_FILTER_LIST_REQUEST,
  PROJECT_FILTER_LIST_SUCCESS,
  PROJECT_FILTER_LIST_FAIL,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_FAIL,
  PROJECT_DELETE_SUCCESS,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
  PROJECT_UPDATE_FAIL,
  PROJECT_GET_ID_REQUEST,
  PROJECT_GET_ID_SUCCESS,
  PROJECT_GET_ID_FAIL,
} from "./projectConstant";

export const getProjectById = (id) => async (dispatch, getState) => {
  dispatch({
    type: PROJECT_GET_ID_REQUEST,
  });
  try {
    const {
      userSignIn: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        auth: `${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `http://localhost:5000/api/project/${id}`,
      config
    );
    dispatch({
      type: PROJECT_GET_ID_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_GET_ID_FAIL,
      payload: err.message,
    });
  }
};

export const fetchProject = () => async (dispatch, getState) => {
  dispatch({
    type: PROJECT_LIST_REQUEST,
  });

  try {
    // const {
    //   userSignIn: { userInfo },
    // } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        // auth: `${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      "http://localhost:5000/api/project/",
      config
    );
    console.log(data);
    dispatch({
      type: PROJECT_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_LIST_FAIL,
      payload: err.message,
    });
  }
};

export const updateProject = (userData) => async (dispatch, getState) => {
  dispatch({
    type : PROJECT_UPDATE_REQUEST
  })
  try {
    const {
      userSignIn: { userInfo },
    } = getState();
    
    const config = {
      headers: {
        "Content-Type": "application/json",
        // auth: `Bearer ${userInfo.tokens[userInfo.tokens.length - 1].token}`,
      },
    };
    
    const { data } = axios.put(
      `http://localhost:5000/api/project/${userData._id}`,
      // userData,
      userData,
      config
    );
    dispatch({
      type: PROJECT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
  //   dispatch({
  //     type: PROJECT_UPDATE_REQUEST,
  //   });

  //   try {
  //     const {
  //       userSignIn: { userInfo },
  //     } = getState();
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         auth: `${userInfo.token}`,
  //       },
  //     };
  //     const { data } = axios.put(
  //       `http://localhost:5000/api/project/${id}`,
  //       {
  //         name: name,
  //         projectStatus: projectStatus,
  //         images: images,
  //         description: description,
  //       },
  //       config
  //     );
  //     console.log(data)
  //     dispatch({
  //       type: PROJECT_UPDATE_SUCCESS,
  //       type: data,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: PROJECT_UPDATE_FAIL,
  //       type: err.message,
  //     });
  //   }
};

export const filterList = (projectStatus) => async (dispatch, getState) => {
  dispatch({
    type: PROJECT_FILTER_LIST_REQUEST,
  });

  try {
    const {
      userSignIn: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        auth: `${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `http://localhost:5000/api/project/filterList?projectStatus=${ projectStatus }`
    );
    console.log(data)
    dispatch({
      type: PROJECT_FILTER_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_FILTER_LIST_FAIL,
      payload: err.message,
    });
  }
};

export const deleteProject = (id) => async (dispatch, getState) => {
  dispatch({
    type: PROJECT_DELETE_REQUEST,
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
    const { data } = axios.delete(
      `http://localhost:5000/api/project/${id}`,
      config
    );
    dispatch({
      type: PROJECT_DELETE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PROJECT_DELETE_FAIL,
      type: err.message,
    });
  }
};

export const addProject = (projectData) => async (dispatch, getState) => {
  dispatch({
    type: PROJECT_ADD_REQUEST,
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
      `http://localhost:5000/api/project/add`,
      projectData,
      config
    );

    dispatch({
      type: PROJECT_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROJECT_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
