import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import newsApi from '../services/news-api';

class ArticlesView extends Component {
  state = {
    articles: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchArticles();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      articles: [],
    });
  };

  fetchArticles = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    newsApi
      .fetchArticles(options)
      .then(articles => {
        this.setState(prevState => ({
          articles: [...prevState.articles, ...articles],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { articles, isLoading, error } = this.state;
    const shouldRenderLoadMoreBtn = articles.length > 0 && !isLoading;

    return (
      <div>
        {error && <h2>Произошла ошибка</h2>}
        <h1>Статьи</h1>
        <SearchForm onSubmit={this.onChangeQuery} />

        <ul>
          {articles.map(({ title, url }) => (
            <li key={title}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
        {isLoading && <h2>Загружаем...</h2>}
        {shouldRenderLoadMoreBtn && (
          <button type="button" onClick={this.fetchArticles}>
            Загрузить ещё...
          </button>
        )}
      </div>
    );
  }
}

export default ArticlesView;
