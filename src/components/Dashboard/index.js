/**
 * Import
 */
import React, { Component } from 'react';
import axios from 'axios';

/**
 * Local import
 */
// Composants
import Pointslist from '../Pointslist';
import Map from '../Map';
/* import Form from '../Form'; */

// Styles et assets
import './app.sass';


/**
 * Code
 */
class Dashboard extends Component {
  state = {
    points: [],
  }

  componentDidMount() {
    // Call axios and get data in state
    this.getDataFromBack();

    // Mercure event definition
    const url = new URL(process.env.REACT_APP_MERCURE_HUB);
    url.searchParams.append('topic', process.env.REACT_APP_MERCURE_TOPIC_URL);
    const eventSource = new EventSource(url);
    eventSource.onmessage = (e) => {
      this.applyMercureUpdate(e);
    };
  }

  getDataFromBack = () => {
    axios.get(`${process.env.REACT_APP_BACK_URL}getpoints.php`)
      .then((response) => {
        this.setState({ points: response.data });
      })
      .catch((error) => {
        alert(error);
      });
  }

  applyMercureUpdate = (e) => {
    const newPointlist = [...JSON.parse(e.data)];
    console.log(newPointlist);
    this.setState({ points: newPointlist });
  }

  render() {
    const { points } = this.state;
    return (
      <div id="app">
        <h1 id="app-title">Lutinerie - The game</h1>
        <p id="app-content">(brief d intro)</p>
        {/* <Pointslist points={points} selectPoint={this.selectPoint} /> */}
        <Map points={points} />
      </div>
    );
  }
}

/**
 * Export
 */
export default Dashboard;
