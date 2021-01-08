import React from 'react';

import '../css/Time.css';

export default class Time extends React.Component {
    constructor(props) {
        super();

        this.props = props;

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
        let extraClassName = this.props.big == true ? ' big' : '';

        return (
            <div className={"time-display" + extraClassName}>
                <h4>{this.state.date}</h4>
            </div>
        )
    }
}