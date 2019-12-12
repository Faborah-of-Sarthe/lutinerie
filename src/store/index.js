/*
 * Npm import
 */
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'
/*
* Local import
*/
// Reducer
import mercureMiddleware from './Middlewares/mercureMiddleware';
import reducer, {initialState, mercurePoints} from 'src/store/reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    mercureMiddleware,
  ),
);
/*
 * Code
 */
// const devTools = [];
// if (window.devToolsExtension) {
//   devTools.push(window.devToolsExtension());
// }

const reducers = {
  app: reducer,
  toastr: toastrReducer
}
const initialStates = {
  app: initialState
}
const combinedReducers = combineReducers(reducers);
// createStore
const store = createStore(combinedReducers, initialStates, enhancers);

store.dispatch(mercurePoints());

/*
 * Export
 */
export default store;
 