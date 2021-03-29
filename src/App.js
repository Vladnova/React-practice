import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import CounterView from './views/CounterView';

const App = () => (
  <>
    <ul>
      <li>
        <Link to="/counter">Счётчик</Link>
      </li>
    </ul>

    <Switch>
      <Route path="/counter">
        <CounterView />
      </Route>

      {/* <Route path="/todos">
        <TodosView />
      </Route>*/}
    </Switch>
  </>
);

export default App;
