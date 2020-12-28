import React from 'react';

import Navbar from './components/Navbar.js';
import Time from './components/Time.js';

import './css/index.css';
import Dashboard from './pages/Dashboard.js';

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
        }
    }

    render() {
        return (
            <div>
                <Navbar changePage={this.changePage} />
                <Time />
                {
                    [<Dashboard />, 'calendar', 'events'][this.state.page]
                }
            </div>
        )
    }
}