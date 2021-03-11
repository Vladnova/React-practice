import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthorBooks = ({ books, props }) => {
  return (
    <>
      <h1>Книги автора</h1>
      <ul>
        {books.map(({ title, id }) => (
          <li key={id}>
            <NavLink to={`/books/${id}`}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AuthorBooks;
