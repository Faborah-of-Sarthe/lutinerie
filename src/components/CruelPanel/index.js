/**
 * Import
 */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
/* import PropTypes from 'prop-types'; */

/**
 * Local import
 */
import { sendDataToBack } from '../../lib/dataSend';
// Styles et assets
import './panel.sass';

/**
 * Code
 */
class CruelPanel extends Component {
  constructor(props) {
    super(props);
    this.slug = props.slug;
    this.state = {
      pushed: [0,0,0,0]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeCombination= () => {
  }

  handleSubmit(event) {
    event.preventDefault();
    // concatenation des valeurs de levier pour faire un mdp
    // let combination = '';
    // for (let [key, value] of Object.entries(this.state.pushed)) {
    //   combination += String(value);
    // }
    // const data = {
    //   slug: this.slug,
    //   password: combination
    // }

    sendDataToBack(data, `${process.env.REACT_APP_BACK_URL}checkPasswords.php`);
  }

  render() {
    return (
      <div className="cruel-panel">
          <button className="cruel-btn small circle red l" onClick={this.changeCombination}>L</button>
          <button className="cruel-btn small square blue s" onClick={this.changeCombination}>S</button>
          <button className="cruel-btn small square red a" onClick={this.changeCombination}>A</button>
          <button className="cruel-btn small square red s" onClick={this.changeCombination}>S</button>
          <button className="cruel-btn small square green m" onClick={this.changeCombination}>M</button>

          <div className="levsection">
            <div className="levier">
              <span>TEMP</span>
              <div className="switch container red"><div className="switch stick"></div></div>
            </div>
            <div className="levier">
              <span>POWER UP</span>
              <div className="switch container red"><div className="switch stick"></div></div>
            </div>
            <div className="levier">
              <span>HYGRO MODE</span>
              <div className="switch container red"><div className="switch stick"></div></div>
            </div>
          </div>

          <button className="cruel-btn circle yellow r" onClick={this.changeCombination}>R</button>
          <button className="cruel-btn big rectangle yellow p" onClick={this.changeCombination}>P</button>
          <button className="cruel-btn square green t" onClick={this.changeCombination}>T</button>
          <button className="cruel-btn circle red a" onClick={this.changeCombination}>A</button>

          <div className="screen container">
            <span className="brandname">- SPECTRUM -</span>
            <div className="content">
              <span>12:56</span>
            </div>
          </div>

          <button className="cruel-btn big circle red p" onClick={this.changeCombination}>P</button>
          <button className="cruel-btn rectangle green e" onClick={this.changeCombination}>E</button>
          <button className="cruel-btn small rectangle yellow l" onClick={this.changeCombination}>L</button>
          <button className="cruel-btn circle green t" onClick={this.changeCombination}>T</button>
          <button className="cruel-btn big square red e" onClick={this.changeCombination}>E</button>
          <button className="cruel-btn circle blue s" onClick={this.changeCombination}>S</button>
      </div>
    );
  }
}

/**
 * Export
 */
export default withRouter(CruelPanel);
