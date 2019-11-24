/* eslint-disable arrow-body-style */
/**
 * Import
 */
import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */

/**
 * Local import
 */
// Composants

// Styles et assets
/* import './app.sass'; */

/**
 * Code
 */
class Task extends Component {
  constructor({ task, deleteTask }) {
    super();
    this.task = task;
    this.deleteTask = deleteTask;
  }

  render() {
    return (
      <li className="task">
        <span className="label">{this.task.label}</span>
        <button type="submit" className="delete" onClick={this.deleteTask} value={this.task.id}>X</button>
      </li>
    );
  }

/*   propTypes = {
    label: PropTypes.string.isRequired,
  } */
}

/**
 * Export
 */
export default Task;
