<template>
  <div class="search-form-block">
    <h1>FIND YOUR MOVIE</h1>
    <div class="search-line">
      <SearchInput />
      <div class="search-form-btn">
        <Button title="SEARCH" />
      </div>
    </div>
    <div class="search-form-tags-container">
      <div class="search-form-tags">
        <RadioButton :title="'SEARCH BY'" :options="options" id="1" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "./SearchInput.vue";
import RadioButton from "./RadioButton.vue";
import Button from "./Button.vue";

export default {
  name: "SearchForm",
  components: { SearchInput, RadioButton, Button },
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
      ]
    };
  }
};
</script>

<style>
.search-line {
  display: flex;
  margin-bottom: 1em;
}

.search-form-tags-container {
  display: flex;
  justify-content: space-between;
  color: white;
}

.search-form-block h1 {
  color: white;
  margin-bottom: 2em;
  font-weight: 100;
  font-size: 32px;
}

.search-form-tags {
  display: flex;
  margin-bottom: 5em;
}

.search-form-btn {
  display: flex;
}
</style>
