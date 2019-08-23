import Vue from 'vue';
import VueRouter from 'vue-router';

import SearchForm from './components/SearchForm';
import FilmItem from './components/FilmItem';
import FoundPage from './components/FoundPage';
import NotFoundPage from './components/NotFoundPage';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: FoundPage,
      children: [
        {
          path: '/',
          component: SearchForm
        },
        {
          path: '/:id',
          component: FilmItem
        }
      ]
    },
    {
      path: '**',
      component: NotFoundPage
    }
  ]
});
