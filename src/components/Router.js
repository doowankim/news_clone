import React from 'react';
import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';
import Header from "./Header";
import KorRead from "../routes/Kor/KoreaContainer";
import UsRead from "../routes/Us/UsContainer";

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={KorRead} />
                <Route path="/us" component={UsRead} />
                <Redirect from="*" to ="/" />
            </Switch>
        </>
    </Router>
);