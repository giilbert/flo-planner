import React from 'react';

import '../css/Event.css';

export default class Event extends React.Component {
    constructor(props) {
        super(props);

        this.props = props
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {
        
    }

    render() {
        return (
            <div className="event">
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
        )
    }
}