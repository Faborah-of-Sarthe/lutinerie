/**
 * Import
 */
import React, { Component } from 'react';

/**
 * Local import
 */
// Composants

// Styles et assets
/* import './app.sass'; */

/**
 * Code
 */

class Form extends Component {

  addTask = (e) => {
    e.preventDefault();
    let newLabel = e.target[0].value;
    console.log(this.state);
  }

  render() {
    return (
      <form id="add-task-form" onSubmit={this.addTask}>
        <input type="text" name="tasklabel" />
      </form>
    )
  }
}

/**
 * Export
 */
export default Form;
