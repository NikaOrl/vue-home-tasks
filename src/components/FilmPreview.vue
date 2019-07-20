<template>
  <div class="item-preview">
    <div>
      <a href="id">
        <!-- <img :src="poster_path" :alt="title" /> -->
        <img :alt="title" />
      </a>
    </div>
    <div class="item-preview-title">
      <div>
        <h3>{{title}}</h3>
      </div>
      <!-- <div>
        <span class="item-preview-release-date">{release_date.split("-")[0]}</span>
      </div>-->
    </div>
    <!-- <div class="item-preview-genres">{genres.join(", ")}</div> -->
  </div>
</template>

<script>
export default {
  name: "FilmPreview",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
</style>
