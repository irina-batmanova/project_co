export const FETCH_GAMES_PENDING = 'FETCH_GAMES_PENDING';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_ERROR = 'FETCH_GAMES_ERROR';
export const FETCH_TURN_PENDING = 'FETCH_TURN_PENDING';
export const FETCH_TURN_SUCCESS = 'FETCH_TURN_SUCCESS';
export const FETCH_TURN_ERROR = 'FETCH_TURN_ERROR'

export const UPDATE_TURN_NUMBER_ERROR = 'UPDATE_TURN_NUMBER_ERROR';
export const UPDATE_TURN_NUMBER_SUCCESS = 'UPDATE_TURN_NUMBER_SUCCESS';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';


function fetchGamesPending() {
    return {
        type: FETCH_GAMES_PENDING
    }
}

function fetchGamesSuccess(games) {
    return {
        type: FETCH_GAMES_SUCCESS,
        games: games
    }
}

function fetchGamesError(error) {
    return {
        type: FETCH_GAMES_ERROR,
        error: error
    }
}

function fetchTurnPending() {
    return {
        type: FETCH_TURN_PENDING
    }
}

function fetchTurnSuccess(turns) {
    return {
        type: FETCH_TURN_SUCCESS,
        turns: turns
    }
}

function fetchTurnError(error) {
    return {
        type: FETCH_TURN_ERROR,
        error: error
    }
}

function loginSuccess(user) {
    return {
      type: LOGIN_SUCCESS,
      user: user
    }
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error: error
  };
}
export {
    fetchGamesError, fetchGamesPending, fetchGamesSuccess,
    fetchTurnError, fetchTurnPending, fetchTurnSuccess};
