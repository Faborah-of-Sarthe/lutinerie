/**
 * Import
 */
import React, { Component } from 'react';
import axios from 'axios';

/**
 * Local import
 */
// Composants
import Map from '../Map';

// Styles et assets
import './app.sass';


/**
 * Code
 */
class Dashboard extends Component {

  render() {
    const { points } = this.props; 
    return (
      <div className="dashboard-page">
        <Map points={points} />
      </div>
    );
  }
}

/**
 * Export
 */
export default Dashboard;
