import Axios from 'axios';
import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import AuthorBooks from '../components/AuthorBooks';

class BooksPages extends Component {
  state = {
    authors: [],
  };
  async componentDidMount() {
    const { data } = await Axios.get(
      'http://localhost:4040/authors?_embed=books',
    );

    this.setState({ authors: data });
  }

  render() {
    const { authors } = this.state;
    const { url, path } = this.props.match;
    return (
      <>
        <h1>Сторінка авторів</h1>
        <ul>
          {authors.map(({ name, id }) => (
            <li key={id}>
              <NavLink to={`${url}/${id}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
        <Route
          path={`${path}/:authorId`}
          render={props => {
            const bookId = Number(props.match.params.authorId);
            const author = authors.find(author => author.id === bookId);

            return author && <AuthorBooks {...props} books={author.books} />;
          }}
        />
      </>
    );
  }
}

export default BooksPages;
