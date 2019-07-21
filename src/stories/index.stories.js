/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';

import Button from '../components/Button.vue';
import FilmPreview from '../components/FilmPreview.vue';
import FilmsList from '../components/FilmsList.vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import MainPage from '../components/MainPage.vue';
import RadioButton from '../components/RadioButton.vue';
import SearchForm from '../components/SearchForm.vue';
import SearchInput from '../components/SearchInput.vue';
import StateLine from '../components/StateLine.vue';

storiesOf('Components', module)
  .add('MainPage', () => ({
    components: { MainPage },
    template: `<MainPage />`,
  }))
  .add('Header', () => ({
    components: { Header },
    template: `<Header />`,
  }))
  .add('SearchForm', () => ({
    components: { SearchForm },
    template: `<SearchForm />`,
  }))
  .add('SearchInput', () => ({
    components: { SearchInput },
    template: `<SearchInput />`,
  }))
  .add('StateLine', () => ({
    components: { StateLine },
    template: `<StateLine />`,
  }))
  .add('FilmsList', () => ({
    components: { FilmsList },
    template: `<FilmsList />`,
  }))
  .add('FilmPreview', () => ({
    components: { FilmPreview },
    template: `
    <FilmPreview 
      :title="'Title'" 
      :poster_path="'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'" 
      :release_date="'2000'" 
      :genres="['genre1', 'genre2']" 
    />`,
  }))
  .add('Footer', () => ({
    components: { Footer },
    template: `<Footer />`,
  }))
  .add('Button', () => ({
    components: { Button },
    template: '<Button title="BUTTON" />',
  }))
  .add('RadioButton', () => ({
    components: { RadioButton },
    template: `
    <RadioButton
      :title="'SEARCH BY'"
      :options="options"
      v-on:option-change="onSearchOptionChange"
    />`,
    methods: {
      onSearchOptionChange(searchOption) {
        alert(searchOption);
      },
    },
    data: () => {
      return {
        options: [
          {
            title: 'TITLE',
            isChecked: true,
            name: 'searchBy',
          },
          {
            title: 'GENRE',
            isChecked: false,
            name: 'searchBy',
          },
        ],
      };
    },
  }));
