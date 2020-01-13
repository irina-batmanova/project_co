import {fetchGamesSuccess, fetchGamesPending, fetchGamesError} from './actions';

function fetchGames() {
    return dispatch => {
        dispatch(fetchGamesPending());
        fetch('http://127.0.0.1:8000/games/', {
          mode: "no-cors",
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        })
        .then(res => res.json())
        .then(res => {
            // if(res.error) {
            //     throw(res.error);
            // }
            console.log('Hello');
            console.log(res);
            dispatch(fetchGamesSuccess(res));
            console.log("hello after dispatch");

            console.log(res);

            return res;
        })
        .catch(error => {
            dispatch(fetchGamesError(error));
        })
    }
}

export default fetchGames;
