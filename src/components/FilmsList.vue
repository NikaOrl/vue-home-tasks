<template>
  <div class="container" ref="wrapper">
    <FilmPreview
      v-for="(film, index) in filmsBySearchValue"
      :key="index"
      :title="film.title"
      :poster_path="film.poster_path"
      :release_date="film.release_date"
      :genres="film.genres"
      :id="film.id"
      v-isInTheView="$refs.wrapper"
      @intersects="intersected($event)"
    />
  </div>
</template>

<script>
import FilmPreview from "./FilmPreview.vue";
import { isInTheView } from "../directives/IsInTheView.js";

export default {
  name: "FilmsList",
  components: { FilmPreview },
  computed: {
    films() {
      return this.$store.state.films;
    },
    searchValue() {
      return this.$store.state.searchValue;
    },
    searchOption() {
      return this.$store.state.searchOption;
    },
    filmsBySearchValue() {
      if (this.$store.state.sortOption === "RELEASE DATE") {
        return [...this.$store.getters.getFilteredFilms].sort(
          (film1, film2) =>
            new Date(film1.release_date) - new Date(film2.release_date)
        );
      }
      return [...this.$store.getters.getFilteredFilms].sort(
        (film1, film2) =>
          new Date(film1.vote_count) - new Date(film2.vote_count)
      );
    }
  },
  methods: {
    intersected(event) {
      // eslint-disable-next-line
      console.log(event.detail);
    }
  },
  directives: {
    isInTheView: isInTheView
  },
  mounted() {
    // eslint-disable-next-line
    this.$store.dispatch("LOAD_FILMS").catch(err => console.log(err.message));
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex: 1 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1em 10em 0 10em;
  background-color: #232323;
}
</style>
