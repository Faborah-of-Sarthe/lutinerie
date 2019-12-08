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
// Composants

// Styles et assets
/* import './app.sass'; */
// import { Link } from 'react-router-dom';

/**
 * Code
 */
class PointPage extends Component {
  constructor({ slug }) {
    super();
    this.slug = slug;
  }

  render() {
    return (
      <div className="pointpage">
        <Link to={`/`}>Retour</Link>
        <h1 className="slug">{ this.slug }</h1>
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
