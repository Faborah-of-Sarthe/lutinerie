/* eslint-disable arrow-body-style */
/**
 * Import
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { BUREAU_1, BUREAU_2 } from 'src/store/reducer';
import Detector from 'src/containers/Sartrouville/detector';
import Receiver from 'src/containers/Sartrouville/receiver';


/**
 * Local import
 */
// Composants

// Styles et assets
/* import './app.sass'; */
import PasswordInput from '../PasswordInput';
import StPetersburgCoords from '../StPetersburgCoords';
import Levels from '../Levels';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { getPoint } from '../../store/reducer';
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
    const { bureau } = this.store.getState().app;

    const point = getPoint(this.store.getState().app, this.slug);

    return (
      <div className="pointpage">
        <header>
          <Link to={`/`}><FontAwesomeIcon icon={ faCaretLeft } /> Retour</Link>
          <h1 className="slug">{ point.label }</h1>
          <div className="indice"><FontAwesomeIcon icon={ faInfoCircle } /></div>
        </header>
        { (this.slug == 'saopaulo') &&
          <Levels slug={ this.slug } key={ this.slug } />
        }
        { (this.slug == 'stpetersbourg') &&
          <StPetersburgCoords slug={ this.slug } key={ this.slug } />
        }

        { (this.slug == 'saragossa' || this.slug == 'sahara' || this.slug == 'saidpur') &&
          <PasswordInput slug={ this.slug } repaired={ point.repaired } key={ this.slug } />

        }
        { this.slug == 'sartrouville' && bureau == BUREAU_1 && <Detector slug={this.slug} />}
        { this.slug == 'sartrouville' && bureau == BUREAU_2 && <Receiver slug={this.slug} />}
      </div>
    );
  }
}

/**
 * Export
 */
export default PointPage;
