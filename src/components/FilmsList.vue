<template>
  <div class="container">
    <FilmPreview
      v-for="film in films"
      :key="film.id"
      :title="film.title"
      :poster_path="film.poster_path"
      :release_date="film.release_date"
      :genres="film.genres"
    />
  </div>
</template>

<script>
import FilmPreview from "./FilmPreview.vue";

let nextId = 1;

export default {
  name: "FilmsList",
  components: { FilmPreview },
  data() {
    return {
      films: [
        {
          id: nextId++,
          title: "Pulp Fiction",
          release_date: "2004",
          genres: ["Action", "Adventure"],
          poster_path:
            "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
        },
        {
          id: nextId++,
          title: "Kill Bill: Vol 1",
          release_date: "2003",
          genres: ["Action", "Adventure"],
          poster_path:
            "https://i.pinimg.com/originals/64/82/ef/6482ef51ce0b437986ec477e0d46f30c.jpg"
        },
        {
          id: nextId++,
          title: "Reservoir dogs",
          release_date: "1994",
          genres: ["Oscar winning Movie"],
          poster_path:
            "https://cdn.cinematerial.com/p/500x/yiotnsli/reservoir-dogs-movie-cover.jpg"
        }
      ]
    };
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
