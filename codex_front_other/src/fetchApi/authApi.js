import axios from 'axios';
import {LOGIN_ERROR, LOGIN_SUCCESS} from '../actions';

function authUser(login, password) {
  const req = axios.post("http://127.0.0.1:8000/auth/");
  return dispatch => {
    req.then(({data}) => {
      dispatch({type: LOGIN_SUCCESS, user: {login: data.login, id: data.id,
      token: data.token}})
    })
  }
}


export default authUser;
