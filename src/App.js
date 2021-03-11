import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePages from './pages/HomePages';
import AuthorsPages from './pages/AuthorsPages';
import BooksPages from './pages/BooksPages';
import NotFoundPage from './pages/NotFoundPage';
import BookDetailsPages from './pages/BookDetailsPages';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/authors"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Authors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Books
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomePages} />
      <Route path="/authors" component={AuthorsPages} />
      <Route exact path="/books" component={BooksPages} />
      <Route path="/books/:bookId" component={BookDetailsPages} />
      <Route component={NotFoundPage} />
    </Switch>
  </>
);

export default App;
