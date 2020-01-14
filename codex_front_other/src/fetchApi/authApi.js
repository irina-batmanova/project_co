import axios from 'axios';
import {LOGIN_ERROR, LOGIN_SUCCESS} from '../actions';

function authUser(login, password) {
  console.log("login and passwd ", login, password);
  const req = axios.post("http://127.0.0.1:8000/auth/", {username: login,
  password: password});
  return dispatch => {
    req.then(({data}) => {
      console.log("response data", data.token);
      dispatch({type: LOGIN_SUCCESS, user: data.token})
    }).catch(({error}) => {
      console.log("catched an error ", error);
      dispatch({type: LOGIN_ERROR, error:
        "Can't login with provided creadentials"})})
  }
}


export default authUser;
