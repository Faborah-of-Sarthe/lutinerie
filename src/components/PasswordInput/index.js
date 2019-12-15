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

  componentDidMount() {
    this.nameInput.focus();
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
    const {repaired} = this.props;
    return (
      <form className="password-area" onSubmit={this.handleSubmit}>
        <p className="intro"> {repaired == '1' ? 'Point déverrouillé !' : 'Point verrouillé'}</p>
        <div className="password-body">
          <label htmlFor="name">
            <span>Veuillez entrer le mot de passe</span>
            <input type="text" id="name" name="name" value={input} onChange={this.handleChange} ref={(input) => { this.nameInput = input; }}  />
          </label>
          <input type="submit" disabled={repaired == '1'} className="check-btn" value="Valider" />
        </div>
      </form>
    );
  }
}

/**
 * Export
 */
export default withRouter(PasswordInput);
