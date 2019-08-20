import axios from 'axios';

const ApiService = {
  init() {
    axios.defaults.baseURL = 'http://react-cdp-api.herokuapp.com/';
  },

  getFilms() {
    return axios.get('movies').then(res => res.data.data);
  },

  getFilm(id) {
    return axios.get(`movies/${id}`).then(res => res.data);
  }
};

export default ApiService;
