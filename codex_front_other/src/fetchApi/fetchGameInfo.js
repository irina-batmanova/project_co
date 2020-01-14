import axios from 'axios';
import {FETCH_GAMEINFO_SUCCESS} from '../actions';

function fetchGames(id) {
  const req = axios.get("http://127.0.0.1:8000/gameinfo?id=" + id);
  console.log("req ", req);
  return dispatch => {
    req.then(({data}) => {
      dispatch({type: FETCH_GAMEINFO_SUCCESS, gameinfo: data, error: null,
        pending: false})
    })
  }
}


export default fetchGames;
