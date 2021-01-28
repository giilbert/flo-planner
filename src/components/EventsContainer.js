import React, { useEffect, useReducer, useState } from 'react';

import Event from './Event';

import { events as eventData, addEventUpdateListener } from '../utils/events';

import '../css/Event.css';


export default function EventsContainer() {
    const [events, setEvents] = useState(eventData);
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        addEventUpdateListener(() => {
            setEvents(updateEvents(events));
            forceUpdate();
        })
    }, [])

    return (
        <div className="left-container">
            <h1>Events</h1>

            <div className="events-container">
                {events.map((v, i) => {
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

const updateEvents = events => {
    let sorted = events;
    sorted = sorted.sort((a, b) => {
        if (a.timestamp > b.timestamp) {
            return 1;
        } else if (b.timestamp > a.timestamp) {
            return -1;
        } else {
            return 0;
        }
    });

    console.log(sorted)

    return sorted;
}