/**
 * Import
 */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import {toastr} from 'react-redux-toastr'

/* import PropTypes from 'prop-types'; */

/**
 * Local import
 */
// Styles et assets
import './passinput.sass';

/**
 * Code
 */
class PasswordInput extends Component {
  constructor(props) {
    super(props);
    this.slug = props.slug;
    this.state = {isSending: false, input: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendDataToBack = this.sendDataToBack.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({input: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = {
      slug: this.slug,
      password: this.state.input
    }

    toastr.info('Envoi en cours', { timeOut: 1500});
    this.setState({ isSending: true});
    setTimeout(() => { this.sendDataToBack(data) }, 2000);
  }

  sendDataToBack(data) {
    const target = `${process.env.REACT_APP_BACK_URL}checkPasswords.php`;
    const qs = require('qs');

    axios({
      method: 'post',
      url: target,
      data: qs.stringify(data)
    }).then(res => {
      this.setState({
        isSending: false
      });
      if (res.data.status == 1) {
        setTimeout(() => { this.props.history.push("/") }, 1000);
      } else if (res.data.message){
        toastr.error(res.data.message);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <form className="password-area" onSubmit={this.handleSubmit}>
        <label>
          <span>Password :</span>
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Valider" />
      </form>
    );
  }
}

/**
 * Export
 */
export default withRouter(PasswordInput);
