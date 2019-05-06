import React, { Component } from 'react';
import { RichText, Date as PrismicDate } from 'prismic-reactjs';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import moment from 'moment';

import ConferenceSummary from './conferenceSummary';
import '../../style/custom.scss';

class Event extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const position = [this.props.data.data.gps.latitude, this.props.data.data.gps.longitude];
        return (
            <div className="event">
                <div className="event__title">
                    {RichText.render(this.props.data.data.name)}
                </div>
                <div className="event__tags">
                    {this.props.data.tags.map(value => <span key={value}>#{value} </span>)}
                </div>
                <div className="event__container">
                    <div className="event__container--left">
                        <div className="event__location">
                            <Map center={position} zoom={14}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url='http:///maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png'
                                />
                                <Marker position={position}>
                                    <Popup>
                                        <span className="event__location--name">{this.props.data.data.location}</span><br/>
                                        <span className="event__location--address">{this.props.data.data.address}</span>
                                    </Popup>
                                </Marker>
                            </Map>
                        </div>
                    </div>
                    <div className="event__container--right">
                        <div className="event__description">
                            {RichText.render(this.props.data.data.description)}
                        </div>
                        <div className="event__date">
                            Date : {`${moment(PrismicDate(this.props.data.data.date)).format('DD/MM/YYYY, HH:mm')}`}
                        </div> 
                        <div className="event__address">
                            Lieu : <span className="event__location--name">{this.props.data.data.location}</span><br/>
                            <span className="event__location--address">{this.props.data.data.address}</span>
                        </div>
                    </div>
                </div>
                <div className="event__conferences">
                    <h1>Conférences</h1>
                    {this.props.data && this.props.data.data.conferences.map(doc => 
                        <ConferenceSummary key={doc.link.id} eventId={this.props.data.id} id={doc.link.id} />
                    )}
                </div>
            </div>
        )
    }
}

export default Event;