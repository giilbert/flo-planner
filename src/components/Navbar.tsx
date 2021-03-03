import * as React from 'react';
import { Link } from 'react-router-dom';

// @ts-ignore
import * as Logo from '../res/flologo.png';
console.log(Logo);
import Time from './Time';

import '../css/Navbar.css';

export default function Navbar() {
  return (
    <div className="Navbar-container">
      <img src={Logo} width="37px" height="20px" className="logo" />
      <div className="Navbar">
        <Link className="nav-item" to="/">
          Dashboard
        </Link>
        <Link className="nav-item" to="/calendar">
          Calendar
        </Link>
        <Link className="nav-item" to="/events">
          Events
        </Link>
        <Link className="nav-item add-button" to="/events/add">
          +
        </Link>
      </div>

      <Time />
    </div>
  );
}
