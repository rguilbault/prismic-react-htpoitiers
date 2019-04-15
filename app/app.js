import React, { Component, Fragment } from 'react';

import Presentation from './presentation';
import PrismicClient from './services/prismicClient';

class App extends Component {
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

        PrismicClient.queryAllByDocumentType('presentation').then(response => {
            if(response) {
                this.setState({prez: response.results[0]})
            }
        });
        PrismicClient.queryAllByDocumentType('evenement').then(response => {
            if(response) {
                this.setState({events: response.results})
            }
        });
        PrismicClient.queryAllByDocumentType('conference').then(response => {
            if(response) {
                this.setState({confs: response.results})
            }
        });
    }

    render() {
        return (
            <Fragment>
                <h1>Test Prismic</h1>
                {this.state.prez && <Presentation data={this.state.prez} />}
                <pre>
                    Evénements :
                    {this.state.events && JSON.stringify(this.state.events, null, 2)}
                </pre>
                <pre>
                    Conférences :
                    {this.state.confs && JSON.stringify(this.state.confs, null, 2)}
                </pre>
            </Fragment>
        )
    }
}

export default App;