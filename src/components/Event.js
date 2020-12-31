import React from 'react';

import '../css/Event.css';

export default class Event extends React.Component {
    constructor(props) {
        super(props);

        this.data = props.data
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {
        
    }

    render() {
        return (
            <div className="event">
                <h3>{this.data.title}</h3>
                <p>{this.data.description}</p>
                <p>#{this.data.id} - {new Date(this.data.timestamp).toLocaleString('en-us', {
                    hour12: true
                })}</p>
            </div>
        )
    }
}