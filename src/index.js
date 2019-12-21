/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Cookies from 'universal-cookie';


// on importe le composant BrowserRouter de react-router-dom

/**
 * Local import
 */
import App from 'src/containers/App';

// store
import store from 'src/store';

/**
 * Code
 */

const cookies = new Cookies();
const token = process.env.REACT_APP_MERCURE_TOKEN;
cookies.set("mercureAuthorization", token, {
  path: process.env.REACT_APP_MERCURE_PATH,
  domain: process.env.REACT_APP_DOMAIN,
  httpOnly: true,
  secure: false
 });

const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootComponent, document.getElementById('root'));
