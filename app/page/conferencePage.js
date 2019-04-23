import React, { Component, Fragment } from 'react';

import PrismicClient from '../services/prismicClient';
import Conference from '../components/conference';

class EventPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conference: null
        };
    }

    async componentDidMount() {
        await PrismicClient.checkApi();

        PrismicClient.queryByDocumentId(this.props.match.params.id).then(response => {
            if(response) {
                this.setState({conference: response})
            }
        });
    }

    render() {
        if(this.state.conference) {
            return (
                <Conference data={this.state.conference} />
            )
        } else {
            return null;
        }
    }
}

export default EventPage;