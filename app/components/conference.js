import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';

import PrismicClient from '../services/prismicClient';

class Conference extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.data) {
            return (
                <div className="conference">
                    <div className="conference__title">
                        {RichText.render(this.props.data.data.name)}
                    </div>
                    <div className="conference__speaker">
                        Par {this.props.data.data.speaker}
                    </div>
                    <div className="conference__description">
                        {RichText.render(this.props.data.data.description)}
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Conference;