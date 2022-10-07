import {
  PROJECT_LIST_FAIL,
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_ADD_FAIL,
  PROJECT_ADD_REQUEST,
  PROJECT_ADD_SUCCESS,
  PROJECT_DELETE_FAIL,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_SUCCESS,
  PROJECT_FILTER_LIST_FAIL,
  PROJECT_FILTER_LIST_REQUEST,
  PROJECT_FILTER_LIST_SUCCESS,
  PROJECT_UPDATE_FAIL,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
  PROJECT_GET_ID_REQUEST,
  PROJECT_GET_ID_SUCCESS,
  PROJECT_GET_ID_FAIL
} from "./projectConstant";

export const updateProject = (state = {}, action) => 
{
  switch (action.type) {
    case PROJECT_UPDATE_REQUEST:
      return { loading: true };
    case PROJECT_UPDATE_SUCCESS:
      return { loading: false, message: action.payload };
    case PROJECT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const listProject = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_LIST_REQUEST:
      return { loading: true };
    case PROJECT_LIST_SUCCESS:
      return {
        loading: false,
        projectList: action.payload,
      };
    case PROJECT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProjectById = (state = {}, action) => 
{
  switch (action.type) {
    case PROJECT_GET_ID_REQUEST:
      return { loading: true };
    case PROJECT_GET_ID_SUCCESS:
      return {
        loading: false,
        editList : action.payload,
      };
    case PROJECT_GET_ID_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addProject = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_ADD_REQUEST:
      return { loading: true };
    case PROJECT_ADD_SUCCESS:
      return { loading: false, projectList: action.payload };
    case PROJECT_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const filterList = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_FILTER_LIST_REQUEST:
      return { loading: true };
    case PROJECT_FILTER_LIST_SUCCESS:
      return { loading: false, projectList: action.payload };
    case PROJECT_FILTER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteProject = (state = {}, action) => {
  switch (action.type) {
    case PROJECT_DELETE_REQUEST:
      return { loading: true };
    case PROJECT_DELETE_SUCCESS:
      return { loading: false, message: action.payload };
    case PROJECT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


