import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';

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
                        Speaker : {this.props.data.data.speaker}
                    </div>
                    <div className="conference__description">
                        <h3 className="conference__description--title">Abstract</h3>
                        <div className="conference__description--content">
                            {RichText.render(this.props.data.data.description)}
                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Conference;