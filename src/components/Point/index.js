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
const Point = ({ point }) => {

  const target = "/point/" + point.slug;
  let statusClass = 'state1'; // default value

  if (point.repaired == 1) {
    statusClass = 'state3';
  } else {
    statusClass = 'state2';
  }

  return (
    <li className="point">
      <span className="label">{point.label}</span>
      <Link to={target} className={`circle ${statusClass}`}>go</Link>
    </li>
  );
}

/**
 * Export
 */
export default Point;
