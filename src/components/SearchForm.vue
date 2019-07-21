<template>
  <div class="search-form-block">
    <h1>FIND YOUR MOVIE</h1>
    <SearchInput v-on:value-change="onSearchValueChange" />
    <div class="search-form-tags">
      <RadioButton
        :title="'SEARCH BY'"
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
  data: () => {
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
      searchOption: "TITLE",
      searchValue: ""
    };
  },
  methods: {
    onSearchOptionChange(searchOption) {
      this.searchOption = searchOption;
    },
    onSearchValueChange(searchValue) {
      this.searchValue = searchValue;
    }
  }
};
</script>

<style scoped>
.search-form-tags {
  color: white;
  padding-bottom: 5em;
}

.search-form-block h1 {
  color: white;
  margin-bottom: 2em;
  font-weight: 100;
  font-size: 32px;
}
</style>
