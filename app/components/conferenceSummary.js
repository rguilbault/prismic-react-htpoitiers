import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ConferenceSummary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.conf) {
            return (
                <div className="conference__summary">
                    <div className="conference__summary--title">
                        <Link to={"/conference/" + this.props.conf.id}>
                            <span className="conference__summary--name">{this.props.conf.data.name[0].text}</span>
                        </Link><br/>
                        <span className="conference__summary--speaker">{this.props.conf.data.speaker}</span>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default ConferenceSummary;