import {
    MOVIES_GET_FAIL, MOVIES_GET_REQUEST, MOVIES_GET_SUCCESS,
    MOVIES_EMAIL_FAIL, MOVIES_EMAIL_REQUEST, MOVIES_EMAIL_SUCCESS,
    MOVIES_GET_ID_FAIL, MOVIES_GET_ID_REQUEST, MOVIES_GET_ID_SUCCESS,
    MOVIES_GET_TITLE_FAIL, MOVIES_GET_TITLE_REQUEST, MOVIES_GET_TITLE_SUCCESS,
     MOVIES_ADD_REQUEST, MOVIES_ADD_SUCCESS, MOVIES_ADD_FAIL,

} from "./moviesTypes"

export const getMoviesReducer = (state = {}, action) => {
    switch (action.type) {
        case MOVIES_GET_REQUEST: return { loading: true }
        case MOVIES_GET_SUCCESS: return { loading: false, moviesList: action.payload }
        case MOVIES_GET_FAIL: return { loading: false, error: action.payload }
        default: return state
    }
}

export const getBySearchReducer = (state = {}, action) => {
    switch(action.type)
    {
        case MOVIES_GET_TITLE_REQUEST : return { loading : true } 
        case MOVIES_GET_TITLE_SUCCESS : return { loading : false, searchList : action.payload }
        case MOVIES_GET_TITLE_FAIL : return { loading : false ,error : action.payload }
        default : return state
    }
}
export const addMoviesReducer = (state = {}, action) => {
    switch (action.type) {
        case MOVIES_ADD_REQUEST: return { loading: true }
        case MOVIES_ADD_SUCCESS: return { loading: false, message: action.payload }
        case MOVIES_ADD_FAIL: return { loading: false, error: action.payload }
        default: return state
    }
}

export const getMoviesIdReducer = (state = {},action ) => {
    switch(action.type)
    {
        case MOVIES_GET_ID_REQUEST : return { loading : true }
        case MOVIES_GET_ID_SUCCESS: return { loading: false, moviesList: action.payload }
        case MOVIES_GET_ID_FAIL : return { loading : false , error : action.payload }
        default : return state
    }
}

export const sendEmailReducer = ( state = {},action ) => {
    switch(action.type){
        case MOVIES_EMAIL_REQUEST : return { loading : true }
        case MOVIES_EMAIL_SUCCESS : return { loading : false, message : action.payload }
        case MOVIES_EMAIL_FAIL : return { loading : false, error : action.payload }
        default : return state
    }
}