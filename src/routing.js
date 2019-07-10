import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Search from './containers/Search'
import Challenge from './containers/Challenge'

const routing = (
    <Router>
        <div>
            <Route path="/" component={Search}/>
            <Route path="/challenge" component={Challenge}/>
        </div>
    </Router>
)