import React from 'react';

import Event from './Event';

import '../css/Event.css';

export default class EventsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {events: []}
        this.props = props;
    }

    componentDidMount() {
        let a = [];

        for (let i = 0; i < 10; i++)
            a.push({
                title: 'big title text',
                description: 'small description text'
            })

        this.setState({
            events: a
        })
    }

    render() {
        return (
            <div className="left-container">
                <h1>Events</h1>

                <div className="events-container">
                    {this.state.events.map((v, i) => {
                        return <Event title={v.title} description={v.description} key={i} />
                    })}
                </div>
            </div>
        )
    }
}