import React from 'react';

import Logo from '../res/flologo.png';

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
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <img src={Logo} width="76px" height="40px" className="logo"/>
                <div className="Navbar">
                    <p className="pointer" onClick={() => this.onClick(0)}>Dashboard</p>
                    <p className="pointer" onClick={() => this.onClick(1)}>Calendar</p>
                    <p className="pointer" onClick={() => this.onClick(2)}>Events</p>
                </div>
            </div>
        )
    }
}