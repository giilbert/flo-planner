import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../res/flologo.png';
import Time from './Time.js';

import '../css/Navbar.css';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);


        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.changePage(e)
    }

    render() {
        return (
            <div className="Navbar-container" style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <img src={Logo} width="37px" height="20px" className="logo" />
                <div className="Navbar">
                    <Link className="pointer" to="/">Dashboard</Link>
                    <Link className="pointer" to="/calendar">Calendar</Link>
                    <Link className="pointer" to="/events">Events</Link>
                </div>

                <Time />
            </div>
        )
    }
}