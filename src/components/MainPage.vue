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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
