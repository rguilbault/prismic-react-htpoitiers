import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './page/app';

class AppRouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={App} />
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter;