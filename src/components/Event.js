import React from 'react';
import '../css/Event.css';

import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

import EventLabel from './EventLabel';


export default class Event extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contextMenuActive: false
        }

        this.data = props.data;
        this.handleRightClick = this.handleRightClick.bind(this);
        this.removeContextMenu = this.removeContextMenu.bind(this);

        this.contextMenu = React.createRef();
    }

    handleRightClick(e) {
        e.preventDefault();
        // trigger right click actions
        setTimeout(() => {
            this.setState({
                contextMenuActive: true
            })
        }, 30)
    }

    removeContextMenu() {
        this.setState({
            contextMenuActive: false
        })
    }

    componentDidMount() {
        this.onClick = e => {
            if (e.target.parentElement.classList.contains('wd-context-menu')) {
                return;
            }

            if (!(e.target.classList.contains('wd-context-menu'))) { // wont disable context menu
                this.removeContextMenu();
            }
        }

        this.onContextMenu = e => {
            e.preventDefault();
            this.removeContextMenu();
        }

        window.addEventListener('contextmenu', this.onContextMenu)
        window.addEventListener('click', this.onClick)
    }

    componentWillUnmount() {
        window.removeEventListener('contextmenu', this.onContextMenu);
        window.removeEventListener('click', this.onClick);
    }

    render() {
        let style = {}

        if (this.state.contextMenuActive == false) {
            style.display = 'none'
        }

        let tags = this.props.tags || []

        return (
            <div className="event wd-context-menu" onContextMenu={this.handleRightClick}>

                <h3>{this.data.title}</h3>

                <EventLabel colors={tags} />
                
                <hr className="separator" />

                <p>{this.data.description}</p>
                <p
                    style={{color: '#111b'}}
                >#{this.data.id} - {new Date(this.data.timestamp).toLocaleString('en-us', {
                    hour12: true
                })}</p>
                
                <div className="event-context-menu wd-context-menu" style={style} ref={this.contextMenu}>
                    <>
                        <DeleteButton />
                        <EditButton />
                    </>
                </div> 
            </div>
        )
    }
}