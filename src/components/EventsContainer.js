import React from 'react';

import Event from './Event';

import { getAllEvents } from '../utils/events';

import '../css/Event.css';

export default class EventsContainer extends React.Component {
    constructor(props) {
        super(props);

        // sort events
        /**
         * @type {Array}
         */
        let sorted = getAllEvents();
        sorted = sorted.sort((a, b) => {
            if (a.timestamp > b.timestamp) {
                return 1;
            } else if (b.timestamp > a.timestamp) {
                return -1;
            } else {
                return 0;
            }
        })

        this.state = { events: sorted }
        this.props = props;
    }

    componentDidMount() {
        this.forceUpdate()
    }

    render() {
        return (
            <div className="left-container">
                <h1>Events</h1>

                <div className="events-container">
                    {this.state.events.map((v, i) => {
                        return <Event data={v} key={i} />
                    })}
                </div>
            </div>
        )
    }
}