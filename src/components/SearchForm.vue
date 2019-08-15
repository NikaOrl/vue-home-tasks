<template>
  <div class="search-form-block">
    <h1>FIND YOUR MOVIE</h1>
    <SearchInput v-on:value-change="onSearchValueChange" />
    <div class="search-form-tags">
      <RadioButton
        title="SEARCH BY"
        :options="options"
        id="1"
        v-on:option-change="onSearchOptionChange"
      />
    </div>
  </div>
</template>

<script>
import SearchInput from "./SearchInput.vue";
import RadioButton from "./RadioButton.vue";

export default {
  name: "SearchForm",
  components: { SearchInput, RadioButton },
  data() {
    return {
      options: [
        {
          title: "TITLE",
          isChecked: true,
          name: "searchBy"
        },
        {
          title: "GENRE",
          isChecked: false,
          name: "searchBy"
        }
      ],
      searchOption: this.$store.state.searchOption,
      searchValue: this.$store.state.searchValue
    };
  },
  methods: {
    onSearchOptionChange(searchOption) {
      this.$store.commit("CHANGE_SEARCH_OPTION", searchOption);
    },
    onSearchValueChange(searchValue) {
      this.$store.commit("CHANGE_SEARCH_VALUE", searchValue);
    }
  }
};
</script>

<style scoped>
* {
  --white-color: #fff;
}

.search-form-tags {
  color: var(--white-color);
  padding-bottom: 5em;
}

.search-form-block h1 {
  color: var(--white-color);
  margin-bottom: 2em;
  font-weight: 100;
  font-size: 32px;
}
</style>
