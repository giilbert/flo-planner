import React from 'react';

import '../css/Time.css';

export default class Time extends React.Component {
    constructor() {
        super();

        this.state = {
            date: ''
        }
    }

    tick() {
        this.setState({
            date: new Date().toLocaleDateString(undefined, {
                weekday: 'short',
                month: 'short', 
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            })
        })
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div className="time-display">
                <h4>{this.state.date}</h4>
            </div>
        )
    }
}