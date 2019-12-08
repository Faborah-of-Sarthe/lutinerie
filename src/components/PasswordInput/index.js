/**
 * Import
 */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
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

    this.toastId = null;
    this.toastId = toast("Envoi en cours", { autoClose: false });
    this.setState({ isSending: true });
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
