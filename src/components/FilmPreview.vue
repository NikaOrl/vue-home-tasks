<template>
  <div class="item-preview">
    <div>
      <router-link :to="'/'+id">
        <img :src="poster_path" :alt="title" />
      </router-link>
    </div>
    <div class="item-preview-title">
      <div>
        <h3>{{title}}</h3>
      </div>
      <div>
        <span class="item-preview-release-date">{{release_date | findYear}}</span>
      </div>
    </div>
    <div class="item-preview-genres">{{filmGenres}}</div>
  </div>
</template>

<script>
export default {
  name: "FilmPreview",
  props: {
    title: {
      type: String,
      default: ""
    },
    id: {
      type: Number
    },
    poster_path: {
      type: String,
      default: ""
    },
    release_date: {
      type: String,
      default: ""
    },
    genres: {
      type: Array
    }
  },
  computed: {
    filmGenres: function() {
      return this.genres && Array.isArray(this.genres)
        ? this.genres.join(" & ")
        : this.genres;
    }
  }
};
</script>

<style scoped>
* {
  --grey-color: #a1a1a1;
}

img {
  width: 100%;
  height: auto;
}

.item-preview {
  max-width: 30%;
  margin-bottom: 1em;
}

.item-preview-title {
  display: flex;
  justify-content: space-between;
}

.item-preview-title h3 {
  font-weight: 100;
  color: var(--grey-color);
}

.item-preview-release-date {
  border: 1px solid var(--grey-color);
  color: var(--grey-color);
  padding: 1px 5px;
}

.item-preview-genres {
  color: var(--grey-color);
  font-size: 12px;
}
</style>
