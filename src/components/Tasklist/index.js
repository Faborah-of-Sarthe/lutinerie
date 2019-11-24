/**
 * Import
 */
import React, { Component } from 'react';

/**
 * Local import
 */
// Composants
import Task from '../Task';

// Styles et assets
/* import './app.sass'; */

/**
 * Code
 */
class Tasklist extends Component {
  render() {
    return (
      <ul id="Tasklist" key="tasklist">
        {this.props.tasks.map((task, i) => (
          <Task task={task} key={task.id} deleteTask={this.props.deleteTask} />
        ))
        }
      </ul>
    )
  }
}
/**
 * Export
 */
export default Tasklist;
