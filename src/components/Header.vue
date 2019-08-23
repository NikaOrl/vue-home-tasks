<template>
  <header>
    <router-link to="/">
      <div class="logo">NETFLIX ROULETTE</div>
    </router-link>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.logo {
  margin-bottom: 5em;
  color: #e50914;
}
</style>
