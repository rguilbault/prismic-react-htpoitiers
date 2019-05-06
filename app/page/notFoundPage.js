import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='notFound'>
                <nav className="navbar">
                    <div>
                        <Link to={'/'}>Accueil</Link>
                    </div>
                </nav>
                <h1>???</h1>
                <img src='https://i.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.webp' />
            </div>
        );
    }
}

export default NotFoundPage;