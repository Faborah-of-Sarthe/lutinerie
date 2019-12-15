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
import { sendDataToBack } from '../../lib/dataSend';

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
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = {
      slug: this.slug,
      password: this.state.input
    }

    sendDataToBack(data, `${process.env.REACT_APP_BACK_URL}checkPasswords.php`);
  }


  render() {
    const {input} = this.state;
    return (
      <form className="password-area" onSubmit={this.handleSubmit}>
        <label>
          <span>Password :</span>
          <input type="text" name="name" value={input} onChange={this.handleChange} />
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
