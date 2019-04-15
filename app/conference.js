import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';

import PrismicClient from './services/prismicClient';

class Conference extends Component {
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
                <div className="conference">
                    <div className="conference__title">
                        {RichText.render(this.state.conf.data.name)}
                    </div>
                    <div className="conference__speaker">
                        Par {this.state.conf.data.speaker}
                    </div>
                    <div className="conference__description">
                        {RichText.render(this.state.conf.data.description)}
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Conference;