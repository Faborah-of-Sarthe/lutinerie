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
import { Link } from 'react-router-dom';

/**
 * Code
 */
class Point extends Component {
  constructor({ point }) {
    super();
    this.point = point;
    this.target = "/point/" + this.point.id;
  }

  render() {
    return (
      <li className="point">
        <span className="label">{this.point.label} </span>
        <Link to={this.target} className="circle">go</Link>
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
