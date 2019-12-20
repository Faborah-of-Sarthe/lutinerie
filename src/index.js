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
  path: process.env.REACT_APP_MERCURE_HUB,
  httpOnly: true,
  secure: false,
  sameSite: true
 });
console.log(cookies.get('mercureAuthorization'));

const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootComponent, document.getElementById('root'));
