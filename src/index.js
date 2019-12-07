/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// on importe le composant BrowserRouter de react-router-dom
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/**
 * Local import
 */
import Dashboard from 'src/components/Dashboard';
import PointPage from 'src/components/PointPage';

// store
import store from 'src/store';

/**
 * Code
 */    
const rootComponent = (
  <Provider store={store}>
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          {/* on crée un composant intermédiaire via la prop render avant d'appeler le notre */}
          <Route
            path="/point/:id"
            render={({history, match, location}) => {
              const { id } = match.params;
              return <PointPage id={id} />
            }}
          />
          <Route>
            <Error />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  </Provider>
);

render(rootComponent, document.getElementById('root'));
