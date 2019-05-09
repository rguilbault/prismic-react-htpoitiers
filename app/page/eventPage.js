import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import PrismicClient from '../services/prismicClient';
import Event from '../components/event';
import ConferenceSummary from '../components/conferenceSummary';
import NotFoundPage from './notFoundPage';

class EventPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: null,
            loading: true,
            confs: []
        };
    }

    async componentDidMount() {
        await PrismicClient.checkApi();

        PrismicClient.queryByDocumentId(this.props.match.params.id).then(eventResponse => {
            if(eventResponse) {
                this.setState({event: eventResponse, loading: false});
                const confIds = eventResponse.data.conferences.map(conf => conf.link.id);

                PrismicClient.queryAllByDocumentIds(confIds, {pageSize: 100, fetch: ['conference.name', 'conference.speaker']}).then(confsResponse => {
                    if(confsResponse) {
                        this.setState({confs: confsResponse.results})
                    }
                });
            } else {
                this.setState({loading: false});
            }
        });
    }

    render() {
        if(this.state.loading) {
            return null;
        } else {
            if(this.state.event) {
                return (
                    <div>
                        <nav className="navbar">
                            <div>
                                <Link to={'/'}>Accueil</Link>
                            </div>
                        </nav>
                        <Event data={this.state.event} />
                        <div className="event__conferences">
                            <h1>Conférences</h1>
                            {this.state.confs && this.state.confs.map(conf =>
                                <ConferenceSummary conf={conf} key={conf.id} eventId={this.state.event.id} id={conf.id} />
                            )}
                        </div>
                    </div>
                )
            } else {
                return <NotFoundPage />;
            }
        }
    }
}

export default EventPage;