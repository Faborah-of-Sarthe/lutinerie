/*
 * Npm import
 */
import { createStore, compose, applyMiddleware } from 'redux';

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

// createStore
const store = createStore(reducer, initialState, enhancers);

store.dispatch(mercurePoints());

/*
 * Export
 */
export default store;
 