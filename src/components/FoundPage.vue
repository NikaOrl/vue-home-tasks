<template>
  <div>
    <Header>
      <router-view />
    </Header>
    <div>
      <StateLine />
      <FilmsList />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import StateLine from "./StateLine.vue";
import FilmsList from "./FilmsList.vue";
import Footer from "./Footer.vue";

export default {
  name: "FoundPage",
  components: {
    Header,
    StateLine,
    FilmsList,
    Footer
  }
};
</script>

<style scoped>
header {
  color: #e50914;
  background: linear-gradient(
      45deg,
      rgba(103, 0, 31, 0.8),
      rgba(34, 101, 163, 0.5)
    ),
    url(../assets/background.jpg);
  background-size: cover;
  padding: 0 10em;
}
</style>
