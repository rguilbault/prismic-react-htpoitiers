import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom';

import PrismicClient from '../services/prismicClient';

class ConferenceSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            conf: null
        }
    }

    async componentDidMount() {
        await PrismicClient.checkApi();

        PrismicClient.queryByDocumentId(this.props.id).then(response => {
            if(response) {
                this.setState({conf: response})
            }
        });
    }

    render() {
        if(this.state.conf) {
            return (
                <div className="conference__summary">
                    <div className="conference__summary--title">
                        <Link to={"/event/" + this.props.eventId + "/conference/" + this.state.conf.id}>
                            <span className="conference__summary--name">{this.state.conf.data.name[0].text}</span>
                        </Link><br/>
                        <span className="conference__summary--speaker">{this.state.conf.data.speaker}</span>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default ConferenceSummary;