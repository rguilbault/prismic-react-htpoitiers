import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './page/mainPage';
import EventPage from './page/eventPage';
import ConferencePage from './page/conferencePage';
import PreviewPage from './page/previewPage';
import Preview2Page from './page/preview2Page';

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
                    <Route exact path="/p" component={PreviewPage} />
                    <Route exact path="/preview/:id" component={Preview2Page} />
                    <Route exact path="/event/:id" component={EventPage} />
                    <Route exact path="/event/:eventId/conference/:confId" component={ConferencePage} />
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter;