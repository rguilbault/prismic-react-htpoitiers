import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import PrismicClient from '../services/prismicClient';
import Conference from '../components/conference';

class ConferencePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conference: null
        };
    }

    async componentDidMount() {
        await PrismicClient.checkApi();

        PrismicClient.queryByDocumentId(this.props.match.params.confId).then(response => {
            if(response) {
                this.setState({conference: response})
            }
        });
    }

    render() {
        if(this.state.conference) {
            return (
                <div>
                    <nav className="navbar">
                        <div><Link to={'/'}>Accueil</Link></div>
                        <div><Link to={'/event/' + this.props.match.params.eventId}>Retour à l'évènement</Link></div>
                    </nav>
                    <Conference data={this.state.conference} />
                </div>
            )
        } else {
            return null;
        }
    }
}

export default ConferencePage;