import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { updateProject } from "./redux/project/projectAction";
import { listProject, addProject, filterList, deleteProject, getProjectById, updateProject } from "./redux/project/projectReducer";
import { userSignInReducer, userListReducer, userSignUpReducer, userSignOutReducer } from "./redux/user/userReducer"
import { sendEmailReducer,getMoviesReducer, getBySearchReducer, addMoviesReducer, getMoviesIdReducer } from "./redux/movies/moviesReducer"
const reducer = combineReducers({
  listProject: listProject,
  addProject: addProject,
  filterList: filterList,
  userSignUp: userSignUpReducer,
  userSignIn: userSignInReducer,
  deleteProject: deleteProject,
  getProjectById: getProjectById,
  updateProject: updateProject,
  getMoviesList: getMoviesReducer,
  addMoviesList: addMoviesReducer,
  getMovieByUserId: getMoviesIdReducer,
  getSearchList: getBySearchReducer,
  sendEmail : sendEmailReducer
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userSignIn: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
