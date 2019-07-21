<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";

export default {
  name: "app",
  components: {
    MainPage
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  font: 100 16px/18px Arial;
}

img {
  width: 100%;
  height: auto;
}
</style>
