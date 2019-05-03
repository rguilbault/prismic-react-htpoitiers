import React, { Component, Fragment } from 'react';

import Presentation from '../components/presentation';
import EventList from '../components/eventList';
import PrismicClient from '../services/prismicClient';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prez: null,
            events: [],
            confs: []
        };
    }

    async componentDidMount() {
        await PrismicClient.checkApi();

        PrismicClient.queryAllByDocumentType('presentation', {}).then(response => {
            if(response) {
                this.setState({prez: response.results[0]})
            }
        });
        PrismicClient.queryAllByDocumentType('evenement', {orderings: '[my.evenement.date desc]', pageSize: 10}).then(response => {
            if(response) {
                this.setState({events: response.results})
            }
        });
    }

    render() {
        return (
            <Fragment>
                {this.state.prez && <Presentation data={this.state.prez} />}
                <EventList data={this.state.events} />
            </Fragment>
        )
    }
}

export default MainPage;