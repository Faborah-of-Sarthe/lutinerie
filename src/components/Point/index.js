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

/**
 * Code
 */
class Point extends Component {
  constructor({ point, selectPoint }) {
    super();
    this.point = point;
    this.selectPoint = selectPoint;
  }

  render() {
    return (
      <li className="point">
        <span className="label">{this.point.label}</span>
        <button type="submit" className="circle" onClick={this.selectPoint} value={this.point.id}>ok</button>
      </li>
    );
  }

/*   propTypes = {
    label: PropTypes.string.isRequired,
  } */
}

/**
 * Export
 */
export default Point;
