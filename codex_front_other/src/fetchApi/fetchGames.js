import axios from 'axios';
import {FETCH_GAMES_SUCCESS} from '../actions';

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


export default fetchGames;
