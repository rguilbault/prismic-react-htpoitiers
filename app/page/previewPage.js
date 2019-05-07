import { Component } from 'react';
import qs from 'qs';

import PrismicClient from '../services/prismicClient';

class PreviewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewObject: null
        };
    }

    async componentDidMount() {
        await PrismicClient.checkApi();
        const params = qs.parse(this.props.location.search.slice(1));

        PrismicClient.preview(params.token).then(response => {
            if(response) {
                this.props.history.push(response);
            }
        });
    }

    render() {
        return null;
    }
}

export default PreviewPage;