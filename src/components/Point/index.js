/* eslint-disable arrow-body-style */
/**
 * Import
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/* import PropTypes from 'prop-types'; */

/**
 * Local import
 */
// Styles et assets
import './point.sass';

/**
 * Code
 */
class Point extends Component {
  constructor({ point }) {
    super();
    this.point = point;
    this.target = "/point/" + this.point.id;
    this.statusClass = 'state1'; // default value
  }

  componentDidUpdate() {
    console.log('didupdate');
  }

  render() {
    if (this.point.hacked === true ) {
      if (this.point.repaired === true) {
        this.statusClass = 'state3';
      } else {
        this.statusClass = 'state2';
      }
    }
    return (
      <li className="point">
        <span className="label">{this.point.label}</span>
        <Link to={this.target} className={`circle ${this.statusClass}`}>go</Link>
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
