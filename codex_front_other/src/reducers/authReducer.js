import {LOGIN_ERROR, LOGIN_SUCCESS} from '../actions'

const initialState = {
  error: undefined,
  user: undefined
}

export function authReducer(state=initialState, action) {
    switch(action.type) {
        case LOGIN_ERROR:
        console.log("login error ", action.error);
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case LOGIN_SUCCESS:
            console.log("login success ", action.user);
            return {
                ...state,
                pending: false,
                user: action.user
            }
        default:
            return state;
    }
}

export default authReducer;
