/**
 * Import
 */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
/* import PropTypes from 'prop-types'; */

/**
 * Local import
 */
// Styles et assets
import './level.sass';

/**
 * Code
 */
class Level extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.changeCombination = props.changeCombination;
    this.state = {
      status: props.pos,
      position: 0
    };
  }

  moveUp = (event) => {
    const currentStatus = this.state.status;
    if (currentStatus < 3) {
      this.setState({
        status: currentStatus + 1,
        position: (currentStatus + 1) * 1.5  // position x taille d'un joystick
      });
      // on informe papa
      this.changeCombination(this.id, currentStatus + 1);
    }
  }
  moveDown = (event) => {
    const currentStatus = this.state.status;
    if (currentStatus > 0) {
      this.setState({
        status: currentStatus - 1,
        position: (currentStatus - 1) * 1.5  // position x taille d'un joystick
      });
      // on informe papa
      this.changeCombination(this.id, currentStatus - 1);
    }
  }


  render() {
    return (
      <div className="level-box">
        <div className="btn up" onClick={this.moveUp}><FontAwesomeIcon icon={ faArrowAltCircleUp } /></div>
        <div className="tracks">
          <div className="level-stick" style={{
            bottom: this.state.position + "em"
          }}>{this.state.status}</div>
        </div>
        <div className="btn down" onClick={this.moveDown}><FontAwesomeIcon icon={ faArrowAltCircleDown } /></div>
      </div>
    );
  }
}

/**
 * Export
 */
export default Level;
