import React, { Component, Fragment } from 'react';
import Prismic from 'prismic-javascript';
import { Link } from 'prismic-reactjs';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prez: null,
            events: [],
            confs: []
        };
    }

    componentDidMount() {
        const apiEndpoint = 'https://htpoitiers-rguilbault.prismic.io/api/v2'

        Prismic.api(apiEndpoint).then(api => {
            api.query(Prismic.Predicates.at('document.type', 'presentation')).then(response => {
                if(response) {
                    this.setState({prez: response.results[0]})
                }
            });
            api.query(Prismic.Predicates.at('document.type', 'evenement')).then(response => {
                if(response) {
                    this.setState({events: response.results})
                }
            });
            api.query(Prismic.Predicates.at('document.type', 'conference')).then(response => {
                if(response) {
                    this.setState({confs: response.results})
                }
            })
        })
    }

    render() {
        return (
            <Fragment>
                <h2>Test Prismic</h2>
                <h3>Présentation</h3>
                <pre>
                    {this.state.prez && JSON.stringify(this.state.prez, null, 2)}
                </pre>
                <p>
                    Evénements :
                    {this.state.events && JSON.stringify(this.state.events, null, 2)}
                </p>
                <p>
                    Conférences :
                    {this.state.confs && JSON.stringify(this.state.confs, null, 2)}
                </p>
            </Fragment>
        )
    }
}

export default App;