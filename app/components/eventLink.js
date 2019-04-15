import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom';

class EventLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const position = [this.props.data.data.gps.latitude, this.props.data.data.gps.longitude];
        return (
            <div className="event__link">
                <Link to={'/event/' + this.props.data.id}>{this.props.data.data.name[0].text}</Link>
            </div>
        )
    }
}

export default EventLink;