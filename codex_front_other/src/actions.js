export const FETCH_GAMES_PENDING = 'FETCH_GAMES_PENDING';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_ERROR = 'FETCH_GAMES_ERROR';

function fetchGamesPending() {
    return {
        type: FETCH_GAMES_PENDING
    }
}

function fetchGamesSuccess(games) {
    console.log("fetch");
    console.log(games);
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

export {fetchGamesError, fetchGamesPending, fetchGamesSuccess};
// export fetchGamesPending
// export fetchGamesSuccess
