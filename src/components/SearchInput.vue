<template>
  <div class="search-form">
    <div class="input-group">
      <input type="text" id="search" name="search" placeholder="Search" />
      <div class="bottom-border" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchInput"
};
</script>

<style>
.search-form {
  width: 100%;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.input-group {
  width: 100%;
  overflow: hidden;
  position: relative;
}

input {
  display: block;
  padding: 10px 15px;
  width: 100%;
  border: none;
  border-radius: 0;
  color: white;
  background: black;
  transition: 0.3s ease;
}

input:focus {
  outline: none;
}

.bottom-border {
  background: #f65261;
  content: "";
  width: 100%;
  height: 5px;
  transition: 0.3s ease;
  position: relative;
}
</style>
