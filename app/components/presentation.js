import React, { Component } from 'react';
import { RichText, Link } from 'prismic-reactjs';

class Presentation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="presentation" data-wio-id={this.props.data.id}>
                <div className="presentation__title">
                    {RichText.render(this.props.data.data.name)}
                </div>
                <div className="presentation__container">
                    <div className="presentation__container--left">
                        <div className="presentation__logo">
                            <img src={Link.url(this.props.data.data.logo)} />
                        </div>
                        <div className="presentation__links">
                            <ul>
                                <li><a href={Link.url(this.props.data.data.link)}>Page HumanTalks</a></li>
                                <li><a href={Link.url(this.props.data.data.meetup)}>Groupe Meetup</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="presentation__container--right">
                        <div className="presentation__description">
                            {RichText.render(this.props.data.data.description)}
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Presentation;