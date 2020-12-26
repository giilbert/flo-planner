import React from 'react';

import Navbar from './components/Navbar.js';
import Time from './components/Time.js';

import './css/index.css';

export default class App extends React.Component {

    constructor() {
        super()

        this.state = {
            page: 0 // 0 dashboard, 1 calendar, 2 upcoming events
        }

        this.changePage = this.changePage.bind(this)
    }

    changePage(x) {
        if (x <= 2 && x >= 0) {
            this.setState({
                page: x
            })
        } else {
            this.setState({
                page: 0
            })
        }
    }

    render() {
        return (
            <div>
                <Navbar changePage={this.changePage} />
                <Time />
                <h1>page: {
                ['dashboard', 'calendar', 'upcoming events'][this.state.page]
                }</h1>
            </div>
        )
    }
}