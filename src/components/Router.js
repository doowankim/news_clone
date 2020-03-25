import React from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import Home from '../routes/Home';
import Everythings from "../routes/Everythings";
import Search from "../routes/Search";
import Header from "./Header";

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/everythings" exact component={Everythings} />
                <Route path="/search" exact component={Search} />
                <Redirect from="*" to="/" />
            </Switch>
        </>
    </Router>
)