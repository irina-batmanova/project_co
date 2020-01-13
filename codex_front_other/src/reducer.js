import {FETCH_GAMES_ERROR, FETCH_GAMES_PENDING, FETCH_GAMES_SUCCESS}
from './actions';
import { combineReducers } from 'redux'

const initialState = {
    pending: false,
    games: [],
    error: null
}

export function gamesReducer(state = initialState, action) {
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

export default combineReducers({
  games: gamesReducer,
})
export const getGames = state => state.games;
export const getGamesPending = state => state.pending;
export const getGamesError = state => state.error;
