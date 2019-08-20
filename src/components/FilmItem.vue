<template>
  <div>
    <div class="container" v-if="film">
      <div class="film-img">
        <img :src="film.poster_path" :alt="film.title" />
      </div>
      <div class="film-info">
        <div class="film-info__title-and-raiting">
          <h1>{{film.title}}</h1>
        </div>
        <div class="film-info__release-date">
          <span>{{film.release_date | findYear}}</span> year
        </div>
        <div class="film-info__overview">{{film.overview}}</div>
      </div>
    </div>
    <div v-else>Film not found</div>
  </div>
</template>

<script>
export default {
  name: "FilmItem",
  computed: {
    film() {
      return this.$store.getters.filmItem(+this.$route.params.id);
    }
  },
  mounted() {
    this.$store
      .dispatch("LOAD_FILM", +this.$route.params.id)
      .catch(err => console.log(err.message));
  }
};
</script>

<style scoped>
* {
  --white-color: #fff;
}

.container {
  display: flex;
  background-color: #232323;
}

.film-img {
  margin: 30px;
  width: 280px;
  flex-shrink: 0;
}

.film-info {
  margin: 30px;
}

.film-info__title-and-raiting h1 {
  color: var(--white-color);
  margin-bottom: 1em;
  font: 100 32px Arial;
}

.film-info__release-date {
  color: #a1a1a1;
  margin-bottom: 0.5em;
}

.film-info__release-date span {
  color: #f65261;
}

.film-info__overview {
  color: var(--white-color);
}
</style>
