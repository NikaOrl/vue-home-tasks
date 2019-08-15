<template>
  <div class="container">
    <FilmPreview
      v-for="(film, index) in filmsBySearchValue"
      :key="index"
      :title="film.title"
      :poster_path="film.poster_path"
      :release_date="film.release_date"
      :genres="film.genres"
    />
  </div>
</template>

<script>
import FilmPreview from "./FilmPreview.vue";

export default {
  name: "FilmsList",
  components: { FilmPreview },
  data() {
    return {
      films: this.$store.state.films
    };
  },
  computed: {
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
