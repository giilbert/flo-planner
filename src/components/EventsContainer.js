import React from 'react';

import Event from './Event';

import { events, addEventUpdateListener } from '../utils/events';

import '../css/Event.css';

export default class EventsContainer extends React.Component {
    constructor(props) {
        super(props);

        // sort events
        this.updateEvents()

        this.props = props;

        addEventUpdateListener(() => {
            this.updateEvents();
            this.forceUpdate();
        })
    }

    updateEvents() {
        let sorted = events;
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
    }

    componentDidMount() {
        this.forceUpdate();
    }

    render() {
        return (
            <div className="left-container">
                <h1>Events</h1>

                <div className="events-container">
                    {this.state.events.map((v, i) => {
                        return <Event 
                            data={v} 
                            key={i}
                            tags={v.tags || null}
                        />
                    })}
                </div>
            </div>
        )
    }
}