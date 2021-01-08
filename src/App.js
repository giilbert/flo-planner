import React from 'react';

import Navbar from './components/Navbar';
import Time from './components/Time';

import './css/index.css';
import './css/fonts.css';
import Dashboard from './pages/Dashboard';

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
                <Time big={true} />
                {
                    [<Dashboard />, 'calendar', 'events'][this.state.page]
                }
            </div>
        )
    }
}