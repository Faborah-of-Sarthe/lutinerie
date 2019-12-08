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
import store from 'src/store';
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
    // this.getDataFromBack();

    
  }

  getDataFromBack = () => {
    axios.get(`${process.env.REACT_APP_BACK_URL}getPoints.php`)
      .then((response) => {
        this.setState({ points: response.data });
      })
      .catch((error) => {
        alert(error);
      });
  }

  applyMercureUpdate = (e) => {
    const newPointlist = [...JSON.parse(e.data)];
    this.setState({ points: newPointlist });
  }

  render() {
    const { points } = this.props; 
    return (
      <div id="app">
        <h1 id="app-title">Lutinerie - The game</h1>
        <p id="app-content">(brief d intro)</p>
        <Map points={points} />
      </div>
    );
  }
}

/**
 * Export
 */
export default Dashboard;
