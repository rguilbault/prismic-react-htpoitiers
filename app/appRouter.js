import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './page/mainPage';
import EventPage from './page/eventPage';
import ConferencePage from './page/conferencePage';
import PreviewPage from './page/previewPage';
import Preview2Page from './page/preview2Page';
import NotFoundPage from './page/notFoundPage';

import '../style/custom.scss';

class AppRouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/p" component={PreviewPage} />
                    <Route exact path="/preview/:id" component={Preview2Page} />
                    <Route exact path="/event/:id" component={EventPage} />
                    <Route exact path="/conference/:confId" component={ConferencePage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default AppRouter;