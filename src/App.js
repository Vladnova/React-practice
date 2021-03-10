import React from 'react';
import { Route } from 'react-router-dom';
import HomePages from './pages/HomePages';
import AuthorsPages from './pages/AuthorsPages';
import BooksPages from './pages/BooksPages';

const App = () => (
  <>
    <Route exact path="/" component={HomePages} />
    <Route path="/authors" component={AuthorsPages} />
    <Route path="/books" component={BooksPages} />
  </>
);

export default App;
