import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Prismic from 'prismic-javascript';

import PrismicClient from '../services/prismicClient';
import Conference from '../components/conference';
import NotFoundPage from './notFoundPage';

class ConferencePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conference: null,
            event: null,
            loading: true,
        };
    }

    async componentDidMount() {
        await PrismicClient.checkApi();

        PrismicClient.queryByDocumentId(this.props.match.params.confId).then(response => {
            if(response) {
                this.setState({conference: response, loading: false})
            } else {
                this.setState({loading: false});
            }
        });

        PrismicClient.search(
            Prismic.Predicates.at('my.evenement.conferences.link', this.props.match.params.confId),
            {fetch: []}
            ).then(response => {
            if(response) {
                this.setState({event: response.results[0]});
            }
        })
    }

    render() {
        let eventLink = <div>..</div>;
        if(this.state.event) {
            eventLink = <div><Link to={'/event/' + this.state.event.id}>Retour à l'évènement</Link></div>;
        }
        if(this.state.loading) {
            return null;
        } else {
            if(this.state.conference) {
                return (
                    <div>
                        <nav className="navbar">
                            <div><Link to={'/'}>Accueil</Link></div>
                            {eventLink}
                        </nav>
                        <Conference data={this.state.conference} />
                    </div>
                )
            } else {
                return <NotFoundPage />;
            }
        }
    }
}

export default ConferencePage;