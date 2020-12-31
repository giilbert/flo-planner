import React from 'react';

import EventsContainer from '../components/EventsContainer';

import '../css/Dashboard.css'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main dashboard">
                <EventsContainer />
                <table>

                </table>
            </div>
        )
    }
}