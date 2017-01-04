import React from 'react';
import {Route, IndexRoute} from 'react-router';
import GameView from './containers/GameView.jsx';
import GameDetailPage from './containers/GameDetailPage.jsx';

export default (
    <Route path="game">
        <IndexRoute component={GameView}/>
        <Route path=":id" component={GameDetailPage}/>
    </Route>
)