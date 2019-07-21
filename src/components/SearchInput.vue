<template>
  <div class="search-line">
    <div class="input-group">
      <input
        type="text"
        v-model="value"
        id="search"
        name="search"
        placeholder="Search"
        v-on:keyup.enter="search"
        class="search-input"
      />
      <div class="bottom-border" />
    </div>
    <div class="search-form-btn" v-on:click="search">
      <Button title="SEARCH" />
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "SearchInput",
  components: { Button },
  methods: {
    search() {
      alert(this.value);
    }
  },
  data: () => {
    return {
      value: ""
    };
  }
};
</script>

<style scoped>
.search-line {
  display: flex;
  margin-bottom: 1em;
}

.input-group {
  width: 100%;
  overflow: hidden;
}

.search-input {
  padding: 18px 15px;
  width: 100%;
  border: none;
  color: white;
  background: #1c1c1c;
  transition: 0.3s ease;
  font-size: 16px;
}

.search-input:focus {
  outline: none;
}

.bottom-border {
  background: #f65261;
  height: 5px;
}

.search-form-btn {
  display: flex;
}
</style>
