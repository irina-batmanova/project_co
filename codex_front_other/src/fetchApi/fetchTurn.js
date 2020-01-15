import axios from 'axios';
import {FETCH_TURN_SUCCESS} from '../actions';

function fetchTurn(game_id) {
  const req = axios.get("http://127.0.0.1:8000/turns/" + game_id.toString(10));
  console.log("req ", req);
  return dispatch => {
    req.then(({data}) => {
      dispatch({type: FETCH_TURN_SUCCESS, turn: data, error: null,
        pending: false})
    })
  }
}

export default fetchTurn;
