import {FETCH_GAMES_ERROR, FETCH_GAMES_PENDING, FETCH_GAMES_SUCCESS}
 from '../actions'

const initialState = {error: undefined,
games: []}

export function gamesReducer(state=initialState, action) {
    switch(action.type) {
        case FETCH_GAMES_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_GAMES_SUCCESS:
            return {
                ...state,
                pending: false,
                games: action.games
            }
        case FETCH_GAMES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default gamesReducer;
