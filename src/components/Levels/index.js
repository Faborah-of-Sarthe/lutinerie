/**
 * Import
 */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
/* import PropTypes from 'prop-types'; */
import axios from 'axios';
import { toast } from 'react-toastify';

/**
 * Local import
 */
import Level from '../Level';
import { sendDataToBack } from '../../lib/dataSend';
// Styles et assets
import './levels.sass';

/**
 * Code
 */
class Levels extends Component {
  constructor(props) {
    super(props);
    this.slug = props.slug;
    this.state = {
      levels: [0,0,0,0]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeCombination= (levelId, newPos) => {
    let leviersAsArray = [...this.state.levels];
    leviersAsArray[levelId] = newPos;
    this.setState({
      levels: leviersAsArray,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // concatenation des valeurs de levier pour faire un mdp
    let combination = '';
    for (let [key, value] of Object.entries(this.state.levels)) {
      combination += String(value);
    }
    const data = {
      slug: this.slug,
      password: combination
    }

    sendDataToBack(data, `${process.env.REACT_APP_BACK_URL}checkPasswords.php`);
  }

  render() {
    return (
      <div className="leviers-area">
        { this.state.levels.map((pos, id) => (
          <Level key={id} id={id} pos={pos} changeCombination={this.changeCombination} />
        )) }
        <button onClick={this.handleSubmit}>Vérifier</button>
      </div>
    );
  }
}

/**
 * Export
 */
export default withRouter(Levels);
