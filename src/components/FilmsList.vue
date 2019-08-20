<template>
  <div class="container" ref="wrapper">
    <FilmPreview
      v-for="(film, index) in filmsBySearchValue"
      :key="index"
      :title="film.title"
      :poster_path="film.poster_path"
      :release_date="film.release_date"
      :genres="film.genres"
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
      if (this.searchOption === "TITLE") {
        return this.films.filter(film =>
          film.title.toLowerCase().includes(this.searchValue.toLowerCase())
        );
      }
      return this.films.filter(film =>
        film.genres.some(genre =>
          genre.toLowerCase().includes(this.searchValue.toLowerCase())
        )
      );
    }
  },
  methods: {
    intersected(event) {
      console.log(event.detail);
    }
  },
  directives: {
    isInTheView: isInTheView
  },
  mounted() {
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
