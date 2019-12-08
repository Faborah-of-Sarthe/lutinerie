/**
 * Import
 */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
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
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({input: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    const target = `${process.env.REACT_APP_BACK_URL}checkPasswords.php`;
    const data = {
      slug: this.slug,
      password: this.state.input
    }
    const qs = require('qs');

    this.setState({ isSending: true });

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
        alert(res.data.message);
        this.props.history.push("/");
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
          Password :
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

/**
 * Export
 */
export default withRouter(PasswordInput);
