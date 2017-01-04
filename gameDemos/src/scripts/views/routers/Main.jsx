import react from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import game from '../modules/game/index.jsx';
import gift from '../modules/gift/index.jsx';
import friend from '../modules/friend/index.jsx';
import person from '../modules/person/index.jsx';
import footer from '../components/footer/index.jsx';

class Main extends react.Component{
  render() {
    return
      <Router history={hashHistory}>
        <Route path="/" component={footer}>
          <IndexRoute component={game}/>
          <Route path="/game" component={game}/>
          <Route path="/gift" component={gift}/>
          <Route path="/friend" component={friend}/>
          <Route path="/person" component={person}/>
        </Route>
      </Router>

  }
}

export { Main as default };
