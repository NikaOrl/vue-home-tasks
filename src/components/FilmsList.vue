<template>
  <div class="container">
    <FilmPreview v-for="film in films" :key="film.id" :title="film.title" />
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
          title: "Learn Vue"
        },
        {
          id: nextId++,
          title: "Learn about single-file components"
        },
        {
          id: nextId++,
          title: "Fall in love"
        }
      ]
    };
  },
  props: []
};
</script>

<style>
</style>
