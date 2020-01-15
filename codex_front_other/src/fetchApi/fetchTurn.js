import axios from 'axios';
import {FETCH_TURN_SUCCESS} from '../actions';

function fetchTurn(gameid) {
  console.log("take an gameid turns", gameid);
  const req = axios.get("http://127.0.0.1:8000/turns/" + gameid.toString(10) + "/gameid");
  return dispatch => {
    req.then(({data}) => {
      dispatch({type: FETCH_TURN_SUCCESS, turns: data, error: null,
        pending: false})
    })
  }
}

export default fetchTurn;
