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
      //   0: 0,
      //   1: 0,
      //   2: 0,
      //   3: 0
      // }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendDataToBack = this.sendDataToBack.bind(this);
  }

  changeCombination= (levelId, newPos) => {
    // let leviersAsArray = [];
    // for (let [key, value] of Object.entries(this.state.levels)) {
    //   leviersAsArray[key] = value;
    // }
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

    this.toastId = null;
    this.toastId = toast("Envoi en cours", { autoClose: false });
    this.setState({ isSending: true });
    setTimeout(() => { this.sendDataToBack(data) }, 2000);
  }
  // DEGUEULASSE !!!
  // Ceci est dupliqué dans PasswordInput Component
  // cadeaaau !
  sendDataToBack(data) {
    const target = `${process.env.REACT_APP_BACK_URL}checkPasswords.php`;
    const qs = require('qs');

    axios({
      method: 'post',
      url: target,
      data: qs.stringify(data)
    }).then(res => {
      console.log(res.data);
      this.setState({
        isSending: false
      });
      if (res.data.status == 1) {
        toast.update(this.toastId, {
          render: res.data.message,
          type: toast.TYPE.SUCCESS,
          autoClose: 4000
        });
        setTimeout(() => { this.props.history.push("/") }, 1000);
      } else if (res.data.message){
        toast.update(this.toastId, {
          render: res.data.message,
          type: toast.TYPE.ERROR,
          autoClose: 4000
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    // const leviersAsArray = [];
    // for (let [key, value] of Object.entries(this.state.levels)) {
    //   leviersAsArray[key] = value;
    // }
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
