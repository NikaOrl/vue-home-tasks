<template>
  <div class="container">
    <div class="film-img">
      <img :src="film.poster_path" :alt="film.title" />
    </div>
    <div class="film-info">
      <div class="film-info__title-and-raiting">
        <h1>{{film.title}}</h1>
      </div>
      <div class="film-info__release-date">
        <span>{{releaseDate}}</span> year
      </div>
      <div class="film-info__overview">{{film.overview}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmItem",
  computed: {
    film() {
      return this.$store.getters.filmItem(351286);
    },
    releaseDate: function() {
      return this.film.release_date.split("-")[0];
    }
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
