export const FETCH_GAMES_PENDING = 'FETCH_GAMES_PENDING';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_ERROR = 'FETCH_GAMES_ERROR';
export const FETCH_GAMEINFO_PENDING = 'FETCH_GAMEINFO_PENDING';
export const FETCH_GAMEINFO_SUCCESS = 'FETCH_GAMEINFO_SUCCESS';
export const FETCH_GAMEINFO_ERROR = 'FETCH_GAMEINFO_ERROR'
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

function fetchGameInfoPending() {
    return {
        type: FETCH_GAMEINFO_PENDING
    }
}

function fetchameInfoSuccess(games) {
    return {
        type: FETCH_GAMEINFO_SUCCESS,
        gameinfo: gameinfo
    }
}

function fetchameInfoError(error) {
    return {
        type: FETCH_GAMEINFO_ERROR,
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
export {fetchGamesError, fetchGamesPending, fetchGamesSuccess};
// export fetchGamesPending
// export fetchGamesSuccess
