import React, { Component, Fragment } from 'react';
import qs from 'qs';
import Cookies from 'js-cookie';

import PrismicClient from '../services/prismicClient';
import Presentation from '../components/presentation';
import Event from '../components/event';
import Conference from '../components/conference';

class Preview2Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewObject: null
        };
    }

    async componentDidMount() {
        await PrismicClient.checkApi();
        if(this.props.match.params.id) {
            PrismicClient.queryByDocumentId(this.props.match.params.id).then(response => {
                if(response) {
                    this.setState({
                        previewObject: response
                    });
                }
            })
        }
    }

    render() {
        if(this.state.previewObject) {
            const type = this.state.previewObject.type;
            let dataView = null;
            if(type === 'presentation') {
                dataView = <Presentation data={this.state.previewObject} />;
            } else if(type === 'evenement') {
                dataView = <Event data={this.state.previewObject} />;
            } else if(type === 'conference') {
                dataView = <Conference data={this.state.previewObject} />;
            }
            return (
                <div>
                    <nav className="navbar">
                        <div>PREVIEW</div>
                    </nav>
                    { dataView }
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Preview2Page;