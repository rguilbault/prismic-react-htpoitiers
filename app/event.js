import React, { Component } from 'react';
import { RichText, Link } from 'prismic-reactjs';

import Conference from './conference';

class Event extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="eventList__item">
                <div className="eventList__item__title">
                    {RichText.render(this.props.data.data.name)}
                </div>
                <div className="eventList__item__description">
                    {RichText.render(this.props.data.data.description)}
                </div>
                <p className="eventList__item__location">
                    <span className="eventList__item__location--name">{this.props.data.data.location}</span> :<br/>
                    <span className="eventList__item__location--address">{this.props.data.data.address}</span>
                </p>
                <div>
                    <h2>Conférences</h2>
                    {this.props.data && this.props.data.data.conferences.map(doc => {
                        return (
                            <Conference key={doc.link.id} id={doc.link.id} />
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default Event;