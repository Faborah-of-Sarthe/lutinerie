/**
 * Import
 */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
/* import PropTypes from 'prop-types'; */

/**
 * Local import
 */
// Styles et assets
import './stpetersburg.sass';
import { sendDataToBack } from '../../lib/dataSend';

/**
 * Code
 */
class StPetersburgCoords extends Component {
  constructor(props) {
    super(props);
    this.slug = props.slug;
    this.state = {};

    // Coordonnees a trouver
    this.coords = {
      'nd': 59,
      'nm': 56,
      'ns': 2,
      'ed': 30,
      'em': 18,
      'es': 22
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.value == this.coords[event.target.name]) {
      this.setState({
        [event.target.name]: true
      });
    } else {
      this.setState({
        [event.target.name]: false
      });
    }
  }

  componentDidUpdate = () => {
    if (this.state.nd && this.state.nm && this.state.ns
     && this.state.ed && this.state.em && this.state.es) {
      // WON !!!
      const data = {
        slug: this.slug,
        password: 'DMS'
      }

      sendDataToBack(data, `${process.env.REACT_APP_BACK_URL}checkPasswords.php`);
    }
  }


  render() {
    return (
      <div className="page-petersburg">
        <form className="password-area" onSubmit={this.handleSubmit}>
          <div className="dms-line">
            <label>
              Nord :
              <input type="text" name="nd" onChange={this.handleChange} className={this.state['nd'] == true ? 'valid' : 'error'} /><span>°</span>
              <input type="text" name="nm" onChange={this.handleChange} className={this.state['nm'] == true ? 'valid' : 'error'} /><span>&prime;</span>
              <input type="text" name="ns" onChange={this.handleChange} className={this.state['ns'] == true ? 'valid' : 'error'} /><span>&prime;&prime;</span>
            </label>
          </div>
          <div className="dms-line">
            <label>
              &nbsp;&nbsp;Est&nbsp;:&nbsp;
              <input type="text" name="ed" onChange={this.handleChange} className={this.state['ed'] == true ? 'valid' : 'error'} /><span>°</span>
              <input type="text" name="em" onChange={this.handleChange} className={this.state['em'] == true ? 'valid' : 'error'} /><span>&prime;</span>
              <input type="text" name="es" onChange={this.handleChange} className={this.state['es'] == true ? 'valid' : 'error'} /><span>&prime;&prime;</span>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

/**
 * Export
 */
export default withRouter(StPetersburgCoords);
