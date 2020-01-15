import {FETCH_GAMES_ERROR, FETCH_GAMES_PENDING, FETCH_GAMES_SUCCESS}
 from '../actions'
 import {FETCH_TURN_ERROR, FETCH_TURN_PENDING, FETCH_TURN_SUCCESS}
 from '../actions'


const initialState = {error: undefined,
games: [],
turns: [],
}

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
        case FETCH_TURN_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_TURN_SUCCESS:
            return {
                ...state,
                pending: false,
                turns: action.turns
            }
        case FETCH_TURN_ERROR:
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
