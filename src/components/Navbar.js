import React from 'react';

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

    componentDidMount() {
        window.addEventListener('resize', e => {
            this.forceUpdate();
        })
    }


    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <img src={Logo} width="74px" height="40px" className="logo"/>
                <div className="Navbar">
                    <p className="pointer" onClick={() => this.onClick(0)}>Dashboard</p>
                    <p className="pointer" onClick={() => this.onClick(1)}>Calendar</p>
                    <p className="pointer" onClick={() => this.onClick(2)}>Events</p>
                </div>

                <Time />
            </div>
        )
    }
}