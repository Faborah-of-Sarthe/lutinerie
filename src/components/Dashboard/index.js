/**
 * Import
 */
import React, { Component } from 'react';
import uuid from 'uuid/v4';

/**
 * Local import
 */
// Composants
import Pointslist from '../Pointslist';
/* import Form from '../Form'; */

// Styles et assets
import './app.sass';


/**
 * Code
 */
class Dashboard extends Component {
  constructor() {
    super();
    const url = new URL('http://localhost:3000/.well-known/mercure');
    url.searchParams.append('topic', 'http://localhost:3000/demo/books/1.jsonld');
    const eventSource = new EventSource(url);
    eventSource.onmessage = (e) => {
      console.log(e.data);
      const newPointlist = [...JSON.parse(e.data)];
      console.log(newPointlist);
      this.setState({ points: newPointlist });
    };
  }

  state = {
    // TODO remplir avec données du back
    points: [
      {
        id: uuid(),
        label: 'Sacramento',
      },
      {
        id: uuid(),
        label: 'Sartrouville',
      },
    ],
  }

  render() {
    const { points } = this.state;
    return (
      <div id="app">
        <h1 id="app-title">Lutinerie - The game</h1>
        <p id="app-content">(brief d intro)</p>
        <Pointslist points={points} selectPoint={this.selectPoint} />
      </div>
    );
  }
}

/**
 * Export
 */
export default Dashboard;
