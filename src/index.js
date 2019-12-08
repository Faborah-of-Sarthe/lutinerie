/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

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
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootComponent, document.getElementById('root'));
