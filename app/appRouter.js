import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './page/mainPage';
import EventPage from './page/eventPage';

import '../style/custom.scss';

class AppRouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/event/:id" component={EventPage} />
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter;