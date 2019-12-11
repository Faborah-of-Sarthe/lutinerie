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
// Styles et assets
import './stpetersburg.sass';

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
    this.sendDataToBack = this.sendDataToBack.bind(this);
  }

  handleChange(event) {
    if (event.target.value == this.coords[event.target.name]) {
      console.log('ça matche');
      this.setState({
        [event.target.name]: true
      });
    } else {
      console.log('ça matche pas');
      this.setState({
        [event.target.name]: false
      });
    }
  }

  componentDidUpdate = () => {
    console.log('update');
    if (this.state.nd && this.state.nm && this.state.ns
     && this.state.ed && this.state.em && this.state.es) {
      // WON !!!
      const data = {
        slug: this.slug,
        password: 'DMS'
      }

      this.toastId = null;
      this.toastId = toast("Envoi en cours", { autoClose: false });
      setTimeout(() => { this.sendDataToBack(data) }, 2000);
    }
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
    );
  }
}

/**
 * Export
 */
export default withRouter(StPetersburgCoords);
