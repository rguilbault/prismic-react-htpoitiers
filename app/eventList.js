import React, { Component } from 'react';

import Event from './event';

class EventList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="eventList">
                <h1>Evénements</h1>
                {this.props.data.map(event => {
                    return (<Event data={event} key={event.id} />)
                })}
            </div>
        );
    }
}

export default EventList;