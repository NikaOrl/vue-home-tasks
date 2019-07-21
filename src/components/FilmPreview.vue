<template>
  <div class="item-preview">
    <div>
      <a href="id">
        <img :src="poster_path" :alt="title" />
      </a>
    </div>
    <div class="item-preview-title">
      <div>
        <h3>{{title}}</h3>
      </div>
      <div>
        <span class="item-preview-release-date">{{release_date.split("-")[0]}}</span>
      </div>
    </div>
    <div
      class="item-preview-genres"
    >{{genres && Array.isArray(genres) ? genres.join(" & ") : genres}}</div>
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
  }
};
</script>

<style scoped>
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
  color: #a1a1a1;
}

.item-preview-release-date {
  border: 1px solid #a1a1a1;
  color: #a1a1a1;
  padding: 1px 5px;
}

.item-preview-genres {
  color: #a1a1a1;
  font-size: 12px;
}
</style>
