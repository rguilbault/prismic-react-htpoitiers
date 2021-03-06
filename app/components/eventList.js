import React, { Component } from 'react';

import EventLink from './eventLink';

class EventList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.data && this.props.data.length > 0) {
            return (
                <div className="eventList">
                    <h1>Evénements</h1>
                    { this.props.data.map(event => <EventLink data={event} key={event.id} />) }
                </div>
            );
        } else {
            return null;
        }
    }
}

export default EventList;