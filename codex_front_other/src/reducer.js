import { combineReducers } from 'redux'
import gamesReducer from './reducers/gamesReducer';
import authReducer from './reducers/authReducer';


export default combineReducers({
  games: gamesReducer,
  auth: authReducer,
})
