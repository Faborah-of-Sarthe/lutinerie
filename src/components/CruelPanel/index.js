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
      gameFinished: false,
      screen: 'idle',
      count: 0,
      enteredValues: '',
      password: ''
    };
  }
  componentDidMount() {
    if(this.props.repaired == "1") {
      this.setState({
        gameFinished: true,
        screen: 'found',
        enteredValues: 'PLAT'
      })
    }
  }
  changeCombination = (event) => {
    if(this.state.gameFinished)
      return

    const button = event.target;

    this.setState((prevState) => ({
      password: prevState.password + button.dataset.code,
      enteredValues: prevState.enteredValues + button.innerHTML,
      count: prevState.count + 1
    }), this.checkPassword);

  }
  
  checkPassword = () => {
    if(this.state.count >= 4) {

      if(this.state.password != '712913'){

        this.setState({
          password: '',
          enteredValues: '',
          screen: 'error',
          count: 0
        }, () => {
          setTimeout(() => {
            this.setState({
              screen: 'idle'
            })
          }, 2000);
        })
      } else {

        const data = {
          slug: this.slug,
          password: this.state.password
        }

        this.setState({
          gameFinished: true,
          screen: 'found'
        })

        sendDataToBack(data, `${process.env.REACT_APP_BACK_URL}checkPasswords.php`);
      }
      
    }
  }


  render() {
    const { screen, enteredValues } = this.state;
    return (
      <div className="cruel-panel">
          <div className="cruel-dashboard">
            <div className="btn-range">
              <button data-code="1" className="cruel-btn small circle red l" onClick={this.changeCombination}>L</button>
              <button data-code="2" className="cruel-btn small square blue s" onClick={this.changeCombination}>S</button>
              <button data-code="3" className="cruel-btn small square red a" onClick={this.changeCombination}>A</button>
              <button data-code="4" className="cruel-btn small square red s" onClick={this.changeCombination}>S</button>
              <button data-code="5" className="cruel-btn small square green m" onClick={this.changeCombination}>M</button>
            </div>
  
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
            <div className="screen container">
              <span className="brandname">- SPECTRUM -</span>
              <div className="content">
                <span>12:56</span>
              </div>
            </div>
            <div className="serial">
              <div className="label">Serial : </div>
              <div className="number">72800ZR</div>
            </div>
            <div className="btn-range">
              <button data-code="6" className="cruel-btn circle yellow r" onClick={this.changeCombination}>R</button>
              <button data-code="7" className="cruel-btn big rectangle yellow p" onClick={this.changeCombination}>P</button>
              <button data-code="8" className="cruel-btn square green t" onClick={this.changeCombination}>T</button>
              <button data-code="9" className="cruel-btn circle red a" onClick={this.changeCombination}>A</button>
            </div>
            <div className="btn-range">
                <button data-code="10" className="cruel-btn big circle red p" onClick={this.changeCombination}>P</button>
                <button data-code="11" className="cruel-btn rectangle green e" onClick={this.changeCombination}>E</button>
                <button data-code="12" className="cruel-btn small rectangle yellow l" onClick={this.changeCombination}>L</button>
                <button data-code="13" className="cruel-btn circle green t" onClick={this.changeCombination}>T</button>
                <button data-code="14" className="cruel-btn big square red e" onClick={this.changeCombination}>E</button>
                <button data-code="15" className="cruel-btn circle blue s" onClick={this.changeCombination}>S</button>
            </div>
            <div className="fils">
              <div className="fil fil1">
                <div className="top"></div>
                <div className="body"></div>
                <div className="bottom"></div>
              </div>
              <div className="fil fil2">
                <div className="top"></div>
                <div className="body"></div>
                <div className="bottom"></div>
              </div>
              <div className="fil fil3">
                <div className="top"></div>
                <div className="body"></div>
                <div className="bottom"></div>
              </div>
              <div className="fil fil4">
                <div className="top"></div>
                <div className="body"></div>
                <div className="bottom"></div>
              </div>
            </div>
          </div>
          <div className="result-screen-wrapper">
            <div className={"screen-result " + screen}>
              { enteredValues }<span>_</span>
            </div>
          </div>
      </div>
    );
  }
}

/**
 * Export
 */
export default withRouter(CruelPanel);
