<template>
  <div class="search-form-block">
    <h3>FIND YOUR MOVIE</h3>
    <div class="search-line">
      <SearchInput />
      <div class="search-form-btn">
        <Button title="SEARCH" />
      </div>
    </div>
    <div>
      <div class="search-form-tags">
        <div>
          <span>SEARCH BY</span>
        </div>
        <div>
          <SearchRadioButton :title="'TITLE'" id="1" :name="'searchBy'" :isChecked="true" />
          <SearchRadioButton :title="'GENRE'" id="2" :name="'searchBy'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "./SearchInput.vue";
import SearchRadioButton from "./SearchRadioButton.vue";
import Button from "./Button.vue";

export default {
  name: "SearchForm",
  components: { SearchInput, SearchRadioButton, Button },
  props: []
};
</script>

<style>
.search-line {
  display: flex;
}
</style>
