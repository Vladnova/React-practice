import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
  'Bearer 4330ebfabc654a6992c2aa792f3173a3';
axios.defaults.baseURL = 'https://newsapi.org';

const fetchArticles = ({ searchQuery = '', currentPage = 1, pageSize = 5 }) => {
  return axios
    .get(
      `/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`,
    )
    .then(res => res.data.articles);
};

export default { fetchArticles };
