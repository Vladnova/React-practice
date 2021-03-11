import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BooksPages extends Component {
  state = {
    books: [],
  };
  async componentDidMount() {
    const { data } = await Axios.get('http://localhost:4040/books');

    this.setState({ books: data });
  }

  render() {
    const { url } = this.props.match;
    const { books } = this.state;
    return (
      <>
        <h1>Сторінка книг</h1>
        <ul>
          {books.map(({ title, id }) => (
            <li key={id}>
              <Link to={`${url}/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default BooksPages;
