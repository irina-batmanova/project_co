import axios from 'axios';
import {FETCH_GAMES_SUCCESS} from '../actions';
import {FETCH_TURN_SUCCESS} from '../actions';

function fetchGames() {
  const req = axios.get("http://127.0.0.1:8000/games/");
  console.log("req ", req);
  return dispatch => {
    req.then(({data}) => {
      dispatch({type: FETCH_GAMES_SUCCESS, games: data, error: null,
        pending: false})
    })
  }
}

function fetchTurn(game_id, turn_number) {
  const req = axios.get("http://127.0.0.1:8000/turns/" + game_id.toString(10) + "/" + turn_number.toString(10));
  console.log("req ", req);
  return dispatch => {
    req.then(({data}) => {
      dispatch({type: FETCH_TURN_SUCCESS, turn: data, error: null,
        pending: false})
    })
  }
}

export default fetchGames;
