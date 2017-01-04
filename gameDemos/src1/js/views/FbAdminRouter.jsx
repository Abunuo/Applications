import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Redirect, IndexRedirect} from 'react-router';
import App from "./App.jsx";
import MobilePhoneBinding from './personalCenter/containers/MobilePhoneBinding.jsx'
import gameRoute from './game/route.js';
import giftPackRoute from './giftPack/route.js';
import personalCenterRouter from "./personalCenter/route.js";
import loginRoute from './login/route.js';

export default class extends React.Component {

    render() {
        let {history} = this.props;
        return (
            <Router history={history}>
                {loginRoute}
                <Route path="/personalCenter/phone" component={MobilePhoneBinding}/>
                <Route path="/" component={App}>
                    <IndexRedirect to="/game"/>
                    {gameRoute}
                    {giftPackRoute}
                    {personalCenterRouter}
                </Route>
            </Router>
        );
    }
}