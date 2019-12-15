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
import PasswordInput from '../PasswordInput';
import StPetersburgCoords from '../StPetersburgCoords';
import Levels from '../Levels';

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
        { (this.slug == 'saopaulo') &&
          <Levels slug={ this.slug } key={ this.slug } />
        }
        { (this.slug == 'stpetersbourg') &&
          <StPetersburgCoords slug={ this.slug } key={ this.slug } />
        }
        { (this.slug == 'saragossa' || this.slug == 'sahara') &&
          <PasswordInput slug={ this.slug } key={ this.slug } />
        }
      </div>
    );
  }
}

/**
 * Export
 */
export default PointPage;
