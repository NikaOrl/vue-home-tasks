import Vue from 'vue';
import Vuex from 'vuex';

import ApiService from '../core/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchValue: '',
    searchOption: 'TITLE',
    films: []
  },
  getters: {
    filmItem(state) {
      return id => state.films.find(film => film.id === id);
    }
  },
  mutations: {
    CHANGE_SEARCH_VALUE(state, value) {
      state.searchValue = value;
    },
    CHANGE_SEARCH_OPTION(state, option) {
      state.searchOption = option;
    },
    ADD_FILMS(state, data) {
      state.films = data;
    },
    ADD_FILM(state, film) {
      if (film.id) {
        state.films = [...state.films, film];
      }
    }
  },
  actions: {
    LOAD_FILMS({ commit }) {
      ApiService.getFilms().then(films => commit('ADD_FILMS', films));
    },
    LOAD_FILM({ commit, state }, id) {
      if (state.films.find(film => film.id === id) === undefined) {
        ApiService.getFilm(id).then(film => commit('ADD_FILM', film));
      }
    }
  }
});
