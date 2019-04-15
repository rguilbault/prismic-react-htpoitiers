import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import Conference from './conference';
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
                <div className="event__description">
                    {RichText.render(this.props.data.data.description)}
                </div>
                <div className="event__location">
                    <h3>Lieu</h3>
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
                <div>
                    <h2>Conférences</h2>
                    {this.props.data && this.props.data.data.conferences.map(doc => 
                        <Conference key={doc.link.id} id={doc.link.id} />
                    )}
                </div>
            </div>
        )
    }
}

export default Event;