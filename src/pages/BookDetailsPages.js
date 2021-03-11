import Axios from 'axios';
import React, { Component } from 'react';

class BookDetailsPages extends Component {
  state = {
    descr: null,
    genre: null,
    id: null,
    imgUrl: null,
    title: null,
    author: null,
  };

  async componentDidMount() {
    const { bookId } = this.props.match.params;
    const { data } = await Axios.get(
      `http://localhost:4040/books/${bookId}?_expand=author`,
    );
    this.setState({ ...data });
  }
  render() {
    const { imgUrl, title, descr, author } = this.state;

    return (
      <>
        <h1>Це сторінка однієї книги</h1>

        <img src={imgUrl} alt={title} />
        <h2>{title}</h2>
        {author && <p>Автор: {author.name}</p>}
        <p>{descr}</p>
      </>
    );
  }
}

export default BookDetailsPages;
