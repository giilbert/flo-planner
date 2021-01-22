import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Time from './components/Time';

import './css/index.css';
import './css/fonts.css';
import Dashboard from './pages/Dashboard';

export default class App extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <Router>
                <Navbar />
                <Time big={true} />

                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
            </Router>
        )
    }
}