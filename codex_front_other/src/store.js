import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

// const initialState = {
//   error: undefined,
//   pending: false,
//   games: [],
//   user: undefined
// }

export default createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)))
