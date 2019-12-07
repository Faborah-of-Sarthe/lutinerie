/**
 * Import
 */
import React, { Component } from 'react';

/**
 * Local import
 */
// Composants
import Point from '../Point';

// Styles et assets
/* import './app.sass'; */

/**
 * Code
 */
class Pointslist extends Component {
  render() {
    return (
      <ul id="Pointlist" key="pointlist">
        {this.props.points.map((point, i) => (
          <Point point={point} key={point.slug} />
        ))
        }
      </ul>
    )
  }
}
/**
 * Export
 */
export default Pointslist;
