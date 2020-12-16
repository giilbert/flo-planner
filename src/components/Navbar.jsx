export default class Navbar extends React.Component {
    constructor(props) {
        super(props);


        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.changePage(e)
    }


    render() {
        return (
            <div className="Navbar">
                <p className="pointer" onClick={() => this.onClick(0)}>Dashboard</p>
                <p className="pointer" onClick={() => this.onClick(1)}>Calendar</p>
                <p className="pointer" onClick={() => this.onClick(2)}>Events</p>
            </div>
        )
    }
}