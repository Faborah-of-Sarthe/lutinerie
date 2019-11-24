/* eslint-disable arrow-body-style */
/**
 * Import
 */
import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */

/**
 * Local import
 */
// Composants

// Styles et assets
/* import './app.sass'; */
// import { Link } from 'react-router-dom';

/**
 * Code
 */
class PointPage extends Component {
  constructor({ id }) {
    super();
    this.id = id;
  }

  render() {
    return (
      <div className="pointpage">
        <span className="id">{ this.id }</span>
      </div>
    );
  }

/*   propTypes = {
    label: PropTypes.string.isRequired,
  } */
}

/**
 * Export
 */
export default PointPage;
