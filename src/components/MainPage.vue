<template>
  <div>
    <Header>
      <SearchForm />
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
import SearchForm from "./SearchForm.vue";
import StateLine from "./StateLine.vue";
import FilmsList from "./FilmsList.vue";
import Footer from "./Footer.vue";

export default {
  name: "MainPage",
  components: {
    Header,
    SearchForm,
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
    url(https://assets.nflxext.com/ffe/siteui/vlv3/eeca4431-e8de-4314-9a9f-189c87c2fe08/3702eb34-731a-4357-8750-20b0d9b98381/BY-en-20190325-popsignuptwoweeks-perspective_alpha_website_small.jpg);
  background-size: cover;
  padding: 0 10em;
}
</style>
