import React from 'react';

import '../css/Event.css';

export default class Event extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contextMenuActive: false
        }

        this.data = props.data;
        this.handleRightClick = this.handleRightClick.bind(this);
        this.removeContextMenu = this.removeContextMenu.bind(this);
    }

    handleRightClick(e) {
        e.preventDefault();
        // trigger right click actions
        this.setState({
            contextMenuActive: true
        })
    }

    removeContextMenu() {
        this.setState({
            contextMenuActive: false
        })
    }

    componentDidMount() {
        window.addEventListener('click', e => {
            if (!(e.target.classList.contains('event-context-menu'))) {
                this.removeContextMenu()
            }
        })
    }

    render() {
        return (
            <div className="event" onContextMenu={this.handleRightClick}>

                <h3>{this.data.title}</h3>
                <p>{this.data.description}</p>
                <p>#{this.data.id} - {new Date(this.data.timestamp).toLocaleString('en-us', {
                    hour12: true
                })}</p>

                {this.state.contextMenuActive ?
                    <div className="event-context-menu">
                        <div>A</div>
                        <div>B</div>
                        <div>C</div>
                    </div> : null
                }
            </div>
        )
    }
}