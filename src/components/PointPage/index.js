/* eslint-disable arrow-body-style */
/**
 * Import
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BUREAU_1, BUREAU_2 } from 'src/store/reducer';
import Detector from 'src/containers/Sartrouville/detector';
import Receiver from 'src/containers/Sartrouville/receiver';

/* import PropTypes from 'prop-types'; */

/**
 * Local import
 */
// Composants

// Styles et assets
/* import './app.sass'; */
import PasswordInput from '../PasswordInput';

/**
 * Code
 */
class PointPage extends Component {
  constructor({ slug, store }) {
    super();
    // const { store } = this.props;
    this.store = store;    
    this.slug = slug;
  }

  render() {
    const { bureau } = this.store.getState();
    
    return (
      <div className="pointpage">
        <Link to={`/`}>Retour</Link>
        <h1 className="slug">{ this.slug }</h1>
        { (this.slug == 'saragossa' || this.slug == 'sahara') &&
          <PasswordInput slug={ this.slug } key={ this.slug } />
        }
        { this.slug == 'sartrouville' && bureau == BUREAU_1 && <Detector />}
        { this.slug == 'sartrouville' && bureau == BUREAU_2 && <Receiver />}
      </div>
    );
  }
}

/**
 * Export
 */
export default PointPage;
