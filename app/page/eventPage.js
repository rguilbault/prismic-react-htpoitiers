import React, { Component, Fragment } from 'react';

import PrismicClient from '../services/prismicClient';
import Event from '../components/event';

class EventPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: null
        };
    }

    async componentDidMount() {
        await PrismicClient.checkApi();

        PrismicClient.queryByDocumentId(this.props.match.params.id).then(response => {
            if(response) {
                this.setState({event: response})
            }
        });
    }

    render() {
        if(this.state.event) {
            return (
                <Event data={this.state.event} />
            )
        } else {
            return null;
        }
    }
}

export default EventPage;