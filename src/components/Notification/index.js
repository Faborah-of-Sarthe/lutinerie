/**
 * Import
 */
// import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';

/**
 * Local import
 */
// Styles et assets
import './notification.sass';

/**
 * Code
 */

const Notification = ({status, message}) => {
 return (
   <li className={status}>{ message }</li>
 )
}


/**
 * Export
 */
export default Notification;
